app.factory("AngularJS_WCFService", ['$http', function ($http) {
    var itemDetails;
    var item = {
        Item_ID: '',
        Item_Name: '',
        Description: '',
        Image_Name: '',
        Item_Price: '',
        AddedBy: ''
    };
    var ret = {
        getItem: function () {
            return item;
        },
        setItem: function (singleitem) {
            debugger;
            item = singleitem;
            // alert("setItem --" + item.Item_ID);
        },
        GetItemDetails: function () {
            return $http.get("http://localhost:30362/ItemDetailsWCF.svc/GetAll")
                .then(function (resp) {
                    itemDetails = resp.data;
                    return itemDetails;
                }, function () {
                    alert("WCF service failed")
                })
        },
        AddItem: function (ItemDetails) {
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