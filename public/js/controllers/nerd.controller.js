'use strict';

angular.module('scotchMean')

.controller('NerdCtrl', function($http) {

    this.tagline = 'Nothing beats a pocket protector!';
    this.send = function(){
      var newProject = {
        site: 'ModernMeal',
        title: 'An Ember and Rails app for the Chefs of America',
        desc: 'ModernMeal was an excellent project to be a part of and I really enjoyed the opportunity. I worked on updating the UI to be responsive as well as functional for cross-browser testing. I also worked on a few of the Ember components to help with some key features to make the users workflow as easy as possible.',
        tech: [
          'EmberJS',
          'Ruby on Rails',
          'jQuery',
        ]
      }
      // $http.post('/api/projects', newProject)
      $http({
              method: 'POST',
              url: '/api/projects',
              data: newProject,
              processData: false
            })
    }

});
