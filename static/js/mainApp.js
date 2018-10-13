
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


/////////////////////////////////////////////

class LoggedUser {
    constructor(album, wdauth) {
        this.album = album;
        this.wdauth = wdauth;
    }

    report() {
        alert(this.album);
    }
}


//nasza klasa
class LogonService {
    //default values
    constructor() {
        this.cleanup();
    }

    login(album, pass) {
        //call external service
        console.log('logging in');
        this.user = new LoggedUser(album, pass);
        this.loggedIn = true;
    }

    logout() {
        console.log('logging out');
        this.cleanup();
    }

    cleanup() {
        this.user = new LoggedUser("", "");
        this.loggedIn = false;
    }
}






//// COMMON DEFINITIONS
app.run(function ($rootScope, $window, $http, $location, $timeout, $interval) {
    $rootScope.R = {};


    $rootScope.R.logonService = new LogonService();
    $rootScope.R.user = new LoggedUser("Z1234", "1111");


    //Global properties
    console.log('Global run');


});