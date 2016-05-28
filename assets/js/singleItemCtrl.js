//option1--broadcast rootscope
app.controller('singleItemCtrl', ['$scope', 'AngularJS_WCFService', '$rootScope', function ($scope, AngularJS_WCFService, $rootScope) {
    var self = this;
    debugger;
    $scope.$on('itemchanged', function (event, item) {
        $scope.item = AngularJS_WCFService.getItem();
    })
}]);