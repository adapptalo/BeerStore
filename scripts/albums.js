define(["kendo", "cart", "config"], function (kendo, cart, config) {
    return {
        baseAlbumViewModel: {
            onSocial:function(e){
                 var album = e.data;
                 //alert(JSON.stringify(album));
                 //alert(album.CERVESA+"@"+album.IMAGEN);
                 socialsharingDemo(album.IMAGEN,album.CERVESA,album.CERVESERA);
            },
            onAddToCart: function (clickEvt) {
                var album = clickEvt.data;
                cart.add(album);
                // force refresh of data bindings.
                var aid = album.get("B_Id");
                album.set("B_Id", -1);
                album.set("B_Id", aid);
                //alert(JSON.stringify(cart));
            },
            albumPrice: function (album) {
                return kendo.toString(parseFloat(album.get("ESTIL")), "c");
            },
            albumArtUrl: function (album) {
                return config.serverUrl + album.get("AlbumArtUrl");
            },
            qtyInCart: function (album) {
                var cartItem = cart.find(album.get("AlbumId"));
                if(cartItem) {
                    return cartItem.get("qty");
                } else {
                    return "";
                }
            },
            buttonClasses: function (album) {
                if(this.qtyInCart(album) !== "") {
                    return "km-icon cartQty";
                } else {
                    return "km-icon km-add";
                }
            }
        }
    };
});