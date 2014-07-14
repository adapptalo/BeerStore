define(["kendo", "data"], function (kendo, data) {
    return {
        show: function(e){
            setTimeout(function () {$(".km-indexedlistview").data("kendoMobileIndexedListView").refresh();}, 1);        
        },
        viewModel: kendo.observable({
            artists: data.artistsList,
            beersX: data.beersList
        })
    };
});