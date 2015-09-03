'use strict';

angular.module('scotchMean')

.factory('projectFactory', function projectFactory($http){
  return $http.get('http://localhost:8080/api/projects')
})
.filter('caps', function () {
  return function (text) {
    return text.replace(/(?:^|\s)\S/g, function(text) { return text.toUpperCase(); });
  };
})
.filter('underscore', function(){
  return function (text) {
    var str = text.replace(/ /g, '_');
    return str;
  };
})

.controller('MainCtrl', function(projectFactory){
  var self = this;
  this.projects = [];
  projectFactory.then(function(results){
    console.log(results)
    return self.projects = results.data;
  })

  this.tagline = "Let's Make Something Amazing"
  this.colorChange = false;

  this.hamburger = function(e){
    var meat = angular.element(document.querySelector( '.menu-icon' ));
    var menu = angular.element(document.querySelector( '.navigation' ));
    console.log(meat)
    meat.toggleClass('active');
    menu.toggleClass('slideIn');
    setTimeout(function() {
        meat.toggleClass('done');
    }, 400);
  }

  this.sidePanel = function(e){
    angular.element(document.querySelector('.sliding-panel-content,.sliding-panel-fade-screen')).toggleClass('is-visible');
    angular.element(document.querySelector('.menu-icon')).toggleClass('active');
    setTimeout(function(){angular.element(document.querySelector('.menu-icon')).toggleClass('done')}, 300)
    e.preventDefault();
  };
})
.directive("scrollnav", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 760) {
                 scope.colorChange = true;
             } else {
                 scope.colorChange = false;
             }
            scope.$apply();
        });
    };
});
