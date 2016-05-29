app.controller('itemDetailsListCtrl', ['$scope', 'AngularJS_WCFService', '$rootScope', function ($scope, AngularJS_WCFService, $rootScope) {
    var self = this;
    showItem = true;
    $scope.setItem = function (detail) {
        showItem = true;
        AngularJS_WCFService.setItem(detail);
    }
    AngularJS_WCFService.GetItemDetails().then(function (itemDetails) {
        $scope.ItemDetails = itemDetails;
    });
}]);
