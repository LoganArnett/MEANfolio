'use strict'

angular.module('slider', ['ngAnimate', 'ngTouch'])
  .config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[').endSymbol(']}')
  })
  .controller('MainCtrl', function () {
    var self = this;
    self.slides = [
    {image: 'images/activ8.png', description: 'Image 00', url: "http://activ8.fitness/crosstrackapp/"},
    {image: 'images/vertical.png', description: 'Image 01', url: "http://loganarnett.com/TIY-Assignments/HTML-CSS/Timeline/Vertical-Timeline.html"},
    {image: 'images/surf.png', description: 'Image 02', url: "http://loganarnett.com/TIY-Assignments/Surf-and-Paddle/index.html"},
    {image: 'images/iron.png', description: 'Image 03', url: "http://loganarnett.com/TIY-Assignments/HTML-CSS/Random/19--Build-a-Blog.html"},
    {image: 'images/mvctodo.png', description: 'Image 04', url: "http://loganarnett.com/TIY-Assignments/MVCtoDo/jQuery-Version/index.html"}
    ];
    this.direction = 'left';
    this.currentIndex = 0;

  this.setCurrentSlideIndex = function (index) {
    this.direction = (index > this.currentIndex) ? 'left' : 'right';
    this.currentIndex = index;
  };

  this.isCurrentSlideIndex = function (index) {
    return this.currentIndex === index;
  };

  this.nextSlide = function () {
    this.direction = 'left';
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  };

  this.prevSlide = function () {
    this.direction = 'right';
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  };
})
.animation('.slide-animation', function () {
  return {
    beforeAddClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        var finishPoint = element.parent().width();
        if(scope.direction !== 'right') {
          finishPoint = -finishPoint;
        }
        TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
      }
      else {
        done();
      }
    },
    removeClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        element.removeClass('ng-hide');

        var startPoint = element.parent().width();
        if(scope.direction === 'right') {
          startPoint = -startPoint;
        }

        TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
      }
      else {
        done();
      }
    }
  };
});
