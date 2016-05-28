//option1--broadcast rootscope
app.controller('itemDetailsListCtrl', ['$scope', 'AngularJS_WCFService', '$rootScope', function ($scope, AngularJS_WCFService, $rootScope) {
        var self = this;
        showItem = false;
        $scope.setItem = function (detail) {
            debugger;
            AngularJS_WCFService.setItem(detail);
            $rootScope.$broadcast('itemchanged', AngularJS_WCFService.item);
        };
        AngularJS_WCFService.GetItemDetails().then(function (itemDetails) {
        $scope.ItemDetails = itemDetails;
    });     
}]);