'use strict';

angular.module('scotchMean')

.factory('getProjects', function($http){
  return $http.get('http://localhost:8080/api/projects');
})

.controller('ProjectCtrl', function($http, getProjects) {
    var self = this;
    getProjects.then(function(results){
      console.log(results)
    })
    this.newProject = {};

    this.tagline = 'Nothing beats a pocket protector!';
    this.create = function(){
      if(self.newProject.site == ' ' || self.newProject.title == ' ' || self.newProject.desc == ' ' || self.newProject.tech == ' '){
        alert('WOOPS, please fill in all fields')
        return false;
      }
      var techList = self.newProject.tech.split(',')
      techList.forEach(function(val, i){
          techList[i] = val.trim();
      });
      var newProject = {
        site: self.newProject.site,
        title: self.newProject.title,
        desc: self.newProject.desc,
        tech: techList
      }

      // $http.post('/api/projects', newProject)
      $http.post('http://localhost:8080/api/projects', newProject)
    }

});
