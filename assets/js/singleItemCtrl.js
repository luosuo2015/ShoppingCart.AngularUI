app.controller('singleItemCtrl', ['$scope', '$http', 'AngularJS_WCFService', function ($scope, $http, AngularJS_WCFService) {
    var self = this;
    debugger;
    var result = AngularJS_WCFService.GetItem();
    if (result) {
        $scope.item = result;
    } else {
        alert("Result is Empty!");
    };    
}]);