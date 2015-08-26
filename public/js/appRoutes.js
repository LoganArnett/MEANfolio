'use strict';
    angular.module('scotchMean').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // home page
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainCtrl as main'
        })

        // nerds page that will use the NerdController
        .state('nerds', {
            url: '/nerds',
            templateUrl: 'views/nerd.html',
            controller: 'NerdCtrl as nerd'
        });

    $urlRouterProvider.otherwise('/');


});
