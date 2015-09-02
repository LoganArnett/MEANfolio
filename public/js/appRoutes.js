'use strict';
    angular.module('scotchMean').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // home page
        .state('home', {
            url: '/',
            templateUrl: 'public/views/home.html',
        })

        // nerds page that will use the NerdController
        .state('nerds', {
            url: '/nerds',
            templateUrl: 'public/views/nerd.html',
            controller: 'NerdCtrl as nerd'
        });

    $urlRouterProvider.otherwise('/');


});
