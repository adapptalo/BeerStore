define(["kendo", "data", "utils", "cart", "albums"], function (kendo, data, utils, cart, albums) {
    var _createAlbumsListView = function () {
        var listViewElement = $("#albums-listview");
        var existingListView = listViewElement.data().kendoMobileListView;
        var viewModel = kendo.observable($.extend({
            albums: data.beersList2
        }, albums.baseAlbumViewModel));

        if(existingListView) {
            existingListView.destroy();
        }

        kendo.bind(listViewElement, viewModel, kendo.mobile.ui);
    };

    return {
        show: function (e) {
            var filter = utils.parseQueryStringToObject();
            utils.setViewTitle(e.sender.element, filter.title);
            utils.scrollViewToTop(e.sender.element);
            data.clear(data.beersList2);
            data.beersList2.filter(filter);           
            _createAlbumsListView();
        }
    }
});