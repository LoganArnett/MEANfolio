'use strict';

angular.module('meanFolio')

.factory('projectFactory', function projectFactory(Restangular){
  return Restangular.one('api/projects').getList();
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
  setTimeout(function() {
    projectFactory.then(function(results){
      return self.projects = results;
    })
  }, 1000);


  this.tagline = "Let's Make Something Amazing"
  this.colorChange = false;

  this.hamburger = function(e){
    var meat = angular.element(document.querySelector( '.menu-icon' ));
    var menu = angular.element(document.querySelector( '#menuFade' ));
    meat.toggleClass('active');
    menu.toggleClass('is-visible');
    setTimeout(function() {
        meat.toggleClass('done');
    }, 400);
  }

  this.sidePanel = function(e){
    angular.element(document.querySelector('.sliding-panel-content')).toggleClass('is-visible');
    angular.element(document.querySelector('.sliding-panel-fade-screen')).toggleClass('is-visible');
    // angular.element(document.querySelector('.sliding-panel-fade-screen')).toggleClass('is-visible');
    angular.element(document.querySelector('.menu-icon')).toggleClass('active');
    setTimeout(function(){angular.element(document.querySelector('.menu-icon')).toggleClass('done')}, 300)
  };

  this.sidePanelSelect = function(e) {
    angular.element(document.querySelector('.sliding-panel-content')).toggleClass('is-visible');
    angular.element(document.querySelector('.sliding-panel-fade-screen')).toggleClass('is-visible');
    // angular.element(document.querySelector('.sliding-panel-fade-screen')).toggleClass('is-visible');
    angular.element(document.querySelector('.menu-icon')).toggleClass('active');
    setTimeout(function(){angular.element(document.querySelector('.menu-icon')).toggleClass('done')}, 300)
    window.scrollTo(0,0);
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
