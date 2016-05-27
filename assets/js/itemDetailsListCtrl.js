app.controller('itemDetailsListCtrl', ['$scope', '$http', 'AngularJS_WCFService', function ($scope, $http, AngularJS_WCFService) {
    var self = this;
    showItem = false;
    //wcfservice.getItemDetails();
    //self.ItemDetails = wcfservice.itemDetails;
    //GetItemDetails();
    //function GetItemDetails() {
    $scope.setItem = function (item) {
        debugger;
        showItem = true;
        alert("111111 ---" + item.Item_ID);
        AngularJS_WCFService.item = $scope.item;
    }
    AngularJS_WCFService.GetItemDetails().then(function (itemDetails) {
        $scope.ItemDetails = itemDetails;
    });
    //alert("Controller : " + AngularJS_WCFService.GetItemDetails().length);
    //$scope.ItemDetails = AngularJS_WCFService.itemDetails;
    //debugger;
    //var promiseGet = AngularJS_WCFService.GetItemDetails();
    //promiseGet.then(function (p1) {
    //    $scope.getItemDetailDisp = p1.data;
    //}, function (errorP1) {                 
    //    alert("Get Item Detail from WCF error " + errorP1.Message);
    //});
    //}
}]);