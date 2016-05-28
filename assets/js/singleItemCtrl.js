//option2 --only use $watch
app.controller('singleItemCtrl', ['$scope', 'AngularJS_WCFService', function ($scope, AngularJS_WCFService) {
    var self = this;
    debugger;    
    $scope.$watch(
        function () { return AngularJS_WCFService.getItem(); },
        function (newValue, oldValue) {
        if (newValue !== oldValue) $scope.item = newValue;
    })
}]);
