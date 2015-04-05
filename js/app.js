'use strict';

angular.module('slider', ['ngAnimate', 'ngTouch'])
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[').endSymbol(']}')
})
.controller('MainCtrl', function () {
  var self = this;
  self.slides = [
  {image: 'images/activ8.png', description: 'Image00', url: "http://activ8.fitness/crosstrackapp/", caption: 'Fitness Tracking Web App built with AngularJS and Firebase'},
  {image: 'images/wildenglish.png', description: 'Image01', url: "http://loganarnett.com/wildenglish/app/#/main", caption: 'Wild English site with Soundcloud and Google Calendar integrations'},
  {image: 'images/surf.png', description: 'Image02', url: "http://loganarnett.com/TIY-Assignments/Surf-and-Paddle/index.html", caption: 'Mock up of a Surf company blog and info site'},
  {image: 'images/ngstore.png', description: 'Image03', url: "http://loganarnett.com/NgStoreFront/#/", caption: 'Single page store front web app built with Angular and filled with products from the Etsy API'},
  {image: 'images/mvctodo.png', description: 'Image04', url: "http://loganarnett.com/TIY-Assignments/MVCtoDo/jQuery-Version/index.html", caption: 'jQuery implementation of the TodoMVC project'}
  ];
  console.log(this.slides)
  this.direction = 'left';
  this.currentIndex = 0;


  this.next = function() {
    this.currentIndex < this.slides.length - 1 ? this.currentIndex++ : this.currentIndex = 0;
  };

  this.prev = function() {
    this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex = this.slides.length - 1;
  };
  this.setCurrentSlideIndex = function (index) {
    this.direction = (index > this.currentIndex) ? 'left' : 'right';
    this.currentIndex = index;
  };

  this.isCurrentSlideIndex = function (index) {
    return this.currentIndex === index;
  };

  this.firstName = false;
  this.lastName = false;
  this.email = false;
  this.message = false;
    
  this.sendInfo = function(){
      if($('#first').val().length == 0){
          return self.firstName = true;
      }
      else if($('#last').val().length == 0){
          return self.lastName = true;
      }
      else if($('#email').val().length == 0){
          return self.email = true;
      }
      else if($('#Message').val().length == 0){
         return self.message = true;
      }
      else {
        console.log("hello")  
      }
  }

})
