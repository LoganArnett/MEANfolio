'use strict';
    angular.module('scotchMean').config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:8080');

    $stateProvider

        // home page
        .state('home', {
            url: '/',
            templateUrl: 'public/views/home.html',
        })

        // nerds page that will use the NerdController
        .state('projects', {
            url: '/new/project',
            templateUrl: 'public/views/new_project.html',
            controller: 'ProjectCtrl as project'
        });

    $urlRouterProvider.otherwise('/');


});
