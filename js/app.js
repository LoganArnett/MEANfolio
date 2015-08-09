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
  {image: 'images/autojekyll.png', description: 'Image02', url: "http://loganarnett.com/AutoJekyll/#/new", caption: 'AutoJekyll tool built for Jekyll Blog workflow'},
  {image: 'images/surf.png', description: 'Image03', url: "http://loganarnett.com/TIY-Assignments/Surf-and-Paddle/index.html", caption: 'Mock up of a Surf company blog and info site'},
  {image: 'images/ngstore.png', description: 'Image04', url: "http://loganarnett.com/NgStoreFront/#/", caption: 'Single page store front web app built with Angular and filled with products from the Etsy API'},
  {image: 'images/columbiastreet.png', description: 'Image05', url: "http://www.columbiastreet.com/", caption: 'Columbia Street Studios Rails App Refactor'}
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

.directive('typewrite', ['$timeout', function ($timeout) {
		function linkFunction (scope, iElement, iAttrs) {
			var timer = null,
				initialDelay = iAttrs.initialDelay ? getTypeDelay(iAttrs.initialDelay) : 200,
				typeDelay = iAttrs.typeDelay ? getTypeDelay(iAttrs.typeDelay) : 200,
				blinkDelay = iAttrs.blinkDelay ? getAnimationDelay(iAttrs.blinkDelay) : false,
				cursor = iAttrs.cursor ? iAttrs.cursor : '|',
				blinkCursor = iAttrs.blinkCursor ? iAttrs.blinkCursor === "true" : true,
				auxStyle;
			if (iAttrs.text) {
				timer = $timeout(function() {
					updateIt(iElement, 0, iAttrs.text);
				}, initialDelay);
			}

			function updateIt(element, i, text){
				if (i <= text.length) {
					element.html(text.substring(0, i) + cursor);
					i++;
					timer = $timeout(function() {
						updateIt(iElement, i, text);
					}, typeDelay);
					return;
				} else {
					if (blinkCursor) {
						if (blinkDelay) {
							auxStyle = '-webkit-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-moz-animation:blink-it steps(1) ' + blinkDelay + ' infinite ' +
										'-ms-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-o-animation:blink-it steps(1) ' + blinkDelay + ' infinite; ' +
										'animation:blink-it steps(1) ' + blinkDelay + ' infinite;';
							element.html(text.substring(0, i) + '<span class="blink" style="' + auxStyle + '">' + cursor + '</span>');
						} else {
							element.html(text.substring(0, i) + '<span class="blink">' + cursor + '</span>');
						}
					} else {
						element.html(text.substring(0, i));
					}
				}
			}

			function getTypeDelay(delay) {
				if (typeof delay === 'string') {
					return delay.charAt(delay.length - 1) === 's' ? parseInt(delay.substring(0, delay.length - 1), 10) * 1000 : +delay;
				}
			}

			function getAnimationDelay(delay) {
				if (typeof delay === 'string') {
					return delay.charAt(delay.length - 1) === 's' ? delay : parseInt(delay.substring(0, delay.length - 1), 10) / 1000;
				}
			}

			scope.$on('$destroy', function() {
				if(timer) {
					$timeout.cancel(timer);
				}
			});
		}

		return {
			restrict: 'A',
			link: linkFunction,
			scope: false
		};

	}]);
