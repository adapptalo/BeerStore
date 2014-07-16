define(["kendo", "data"], function (kendo, data) {
    return {
        show: function(e){
             setTimeout(function () {data.beersList.filter([]);}, 1);      
        },
        viewModel: kendo.observable({
            artists: data.artistsList,
            beersX: data.beersList
        })
    };
});