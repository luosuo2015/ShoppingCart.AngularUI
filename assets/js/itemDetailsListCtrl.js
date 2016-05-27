app.controller('itemDetailsListCtrl', ['$scope', '$http', 'AngularJS_WCFService', function ($scope, $http, AngularJS_WCFService) {
    var self = this;
    showItem = false;
    $scope.setItem = function (item) {
        debugger;
        showItem = true;
        alert("111111 ---" + item.Item_ID);
        AngularJS_WCFService.item = $scope.item;
    }
    AngularJS_WCFService.GetItemDetails().then(function (itemDetails) {
        $scope.ItemDetails = itemDetails;
    });     
}]);