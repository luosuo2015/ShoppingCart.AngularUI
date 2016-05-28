//option2 --only use $watch
app.controller('itemDetailsListCtrl', ['$scope', 'AngularJS_WCFService', function ($scope, AngularJS_WCFService) {
    var self = this;
    showItem = false;
    $scope.setItem = function (detail) { 
        showItem = true;
        AngularJS_WCFService.setItem(detail);
    }
    AngularJS_WCFService.GetItemDetails().then(function (itemDetails) {
        $scope.ItemDetails = itemDetails;
    });     
}]);
