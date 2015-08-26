'use strict';
    angular.module('scotchMean').config(function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl as main'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdCtrl as nerd'
        });

    $locationProvider.html5Mode(true);

});
