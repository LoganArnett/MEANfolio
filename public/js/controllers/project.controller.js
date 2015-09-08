'use strict';

angular.module('scotchMean')

.controller('ProjectCtrl', function(Restangular) {
    var self = this;
    this.newProject = {};

    this.tagline = 'Nothing beats a pocket protector!';
    this.create = function(){
      if(self.newProject.site == '' || self.newProject.title == '' || self.newProject.desc == '' || self.newProject.tech == ''){
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
      Restangular.one('api/').post('projects', JSON.stringify(newProject)).then(function(){
        $location.path('#/');
      });

    }

});
