'use strict';

angular.module('slider', ['ngAnimate', 'ngTouch'])
.config(function($interpolateProvider){
  $interpolateProvider.startSymbol('{[').endSymbol(']}')
})
.controller('MainCtrl', function () {
  var self = this;
  self.slides = [
  {image: 'images/activ8.png', description: 'Image 00', url: "http://activ8.fitness/crosstrackapp/"},
  {image: 'images/vertical.png', description: 'Image 01', url: "http://htmlpreview.github.io/?https://github.com/LoganArnett/TIY-Assignments/blob/gh-pages/HTML-CSS/Timeline/Vertical-Timeline.html"},
  {image: 'images/surf.png', description: 'Image 02', url: "http://loganarnett.com/TIY-Assignments/Surf-and-Paddle/index.html"},
  {image: 'images/iron.png', description: 'Image 03', url: "http://loganarnett.com/TIY-Assignments/HTML-CSS/Random/19--Build-a-Blog.html"},
  {image: 'images/mvctodo.png', description: 'Image 04', url: "http://loganarnett.com/TIY-Assignments/MVCtoDo/jQuery-Version/index.html"}
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

})
