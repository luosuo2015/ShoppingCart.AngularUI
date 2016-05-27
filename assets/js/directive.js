app.directive("topPanel", function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/top-panel.html'
    }
});

app.directive('listPanel', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/itemDetailsList.html'
    }
});

app.directive('singleitemPanel', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/singleitemPanel.html'
    }
});