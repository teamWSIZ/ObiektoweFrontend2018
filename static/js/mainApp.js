
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






/**
 * Ta funkcja jest wykonywana tylko raz dla całej aplikacji; obiekty zdefiniowane na $rootScope
 * można używać we wszystkich widokach.
 */
app.run(function ($rootScope, $window, $http, $location, $timeout, $interval) {
    $rootScope.R = {};

    $rootScope.R.logonService = new LogonService($http, 'https://denver.wsi.edu.pl:8443/wd-auth');
    $rootScope.R.chatService = new ChatService($http, $rootScope.$apply);



});