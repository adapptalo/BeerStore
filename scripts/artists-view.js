define(["kendo", "data"], function (kendo, data) {
    return {
        show: function(e){
            setTimeout(function() {
                    $(window).trigger('resize'); 
                }, 300);             
        },
        viewModel: kendo.observable({
            artists: data.artistsList,
            beersX: data.beersList
        })
    };
});