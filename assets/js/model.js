app.factory("AngularJS_WCFService", ['$http', function ($http) {
    var itemDetails;
    var item = {
        itemID: '',
        itemName: '',
        description: '',
        imageName: '',
        itemPrice: '',
        addedBy: ''
    };
    var ret = {
        getItemDetails: function () {
            return $http.get("http://localhost:30362/ItemDetailsWCF.svc/getAll")
                .then(function (resp) {
                    itemDetails = resp.data;
                    return itemDetails;
                }, function () {
                    alert("WCF service failed")
                })
        },
        addItem: function (ItemDetails) {
            $http.post("http://localhost:30362/ItemDetailsWCF.svc/addItemMaster", ItemDetails)
            .succcess(function (data, status) {
                return data;
            }).error(function (data, status) {
                alert("Add item failed!");
            })
        }
    }
    return ret;
}])