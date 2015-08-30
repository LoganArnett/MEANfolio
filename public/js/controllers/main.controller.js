'use strict';

angular.module('scotchMean')

.controller('MainCtrl', function(){
  this.tagline = "Let's Make Something Amazing"

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
});
