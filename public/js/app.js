'use strict';
angular.module('meanFolio', ['ui.router', 'restangular'])

.config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
RestangularProvider.setBaseUrl('http://fierce-brook-9239.herokuapp.com/');

$stateProvider

    // home page
    .state('home', {
        url: '/',
        templateUrl: 'public/views/home.html',
    })
    .state('projects', {
        url: '/new/project',
        templateUrl: 'public/views/new_project.html',
        controller: 'ProjectCtrl as project'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'public/views/about.html',
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'public/views/contact.html',
    })

$urlRouterProvider.otherwise('/');

});
