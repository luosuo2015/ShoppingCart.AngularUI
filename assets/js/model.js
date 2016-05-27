app.factory("AngularJS_WCFService", ['$http', function ($http) {
    //var wcfservice = {};
    //var itemDetails = [];
    //wcfservice.getItemDetails = function () {
    //    var self = this;
    //    return $http.get("http://localhost:30362/ItemDetailsWCF.svc/GetAll")
    //    .then(function (response) {
    //        self.itemDetails = response.data;
    //    }, function (resp) {
    //        alert("WCF service failed!");
    //    });
    //};

    //wcfservice.AddItem = function (ItemDetail) {
    //    $http.post("http://localhost:38439/ShoppingCartService.svc/addItemMaster", ItemDetail)
    //    .succcess(function (data, status) {
    //        return data;
    //    }).error(function (data, status) {
    //        alert("Add item failed!");
    //    })
    //};
    //return wcfservice;
    var itemDetails;
    var item;
    var ret = {
        GetItem: function () {
            //var self = this;
            //for(var i=0; i< self.itemDetails.length; i++){
            //    item = self.itemDetails[i];
            //    if (item.id == parseInt(id)) {
            //        return item;
            //    }
            //}
            return item;
        },
        setItem: function(singleitem){
            item = singleitem;
        },
             GetItemDetails: function () {
                    return $http.get("http://localhost:30362/ItemDetailsWCF.svc/GetAll")
                        .then(function (resp) {
                            itemDetails = resp.data;
                            //alert(itemDetails.length);
                        return itemDetails;
                        //if (result.succcess) {
                        //    itemDetails = result;
                        //    return itemDetails;
                        //} else {
                        //    alert("return ItemDetails json file failed");
                        //}
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