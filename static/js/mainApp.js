
//List used modules
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]);

//// ROUTES
app.config(['$routeProvider', '$logProvider', function ($routeProvider, $logProvider) {
    $logProvider.debugEnabled(true);
    let urlBase = 'partials/';

    $routeProvider.when('/', {
        templateUrl: urlBase + 'browseView.html',
        controller: 'masterCtrl'
    }).when('/toolsView', {
        templateUrl: urlBase + 'browseView.html',
        controller: 'masterCtrl'
    }).when('/browseView', {
        templateUrl: urlBase + 'browseView.html',
        controller: 'masterCtrl'
    });
}]);






//// COMMON DEFINITIONS
app.run(function ($rootScope, $window, $http, $location, $timeout, $interval) {
    $rootScope.R = {};

    $rootScope.R.logonService = new LogonService();
    $rootScope.R.user = new LoggedUser("Z1234", "1111");
    $rootScope.R.chatService = new ChatService();


    //Global properties
    console.log('Global run');


});