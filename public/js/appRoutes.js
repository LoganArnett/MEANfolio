'use strict';
    angular.module('scotchMean').config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://fierce-brook-9239.herokuapp.com/');

    $stateProvider

        // home page
        .state('home', {
            url: '/',
            templateUrl: 'MEANfolio/public/views/home.html',
        })
        .state('projects', {
            url: '/new/project',
            templateUrl: 'MEANfolio/public/views/new_project.html',
            controller: 'ProjectCtrl as project'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'MEANfolio/public/views/about.html',
        })

    $urlRouterProvider.otherwise('/');


});
