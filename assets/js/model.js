app.factory("AngularJS_WCFService", ['$http', function ($http) {
    var itemDetails;
    var item;
    var ret = {
        GetItem: function () {
            return item;
        },
        setItem: function(singleitem){
            item = singleitem;
        },
        GetItemDetails: function () {
            return $http.get("http://localhost:30362/ItemDetailsWCF.svc/GetAll")
                .then(function (resp) {
                    itemDetails = resp.data;
                return itemDetails;
            }, function () {
                alert("WCF service failed")
            })
            } ,
        AddItem : function(ItemDetails){
            $http.post("http://localhost:38439/ShoppingCartService.svc/addItemMaster", ItemDetails)
            .succcess(function (data, status) {
                return data;
            }).error(function (data, status) {
                alert("Add item failed!");
            })
        }
    }
    return ret;
}])