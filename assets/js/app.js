var app = angular.module("theapp", ['ngRoute']);
app.run(['$rootScope', 'AngularJS_WCFService', function ($rootScope, AngularJS_WCFService) {
    $rootScope.date = new Date();

}]);