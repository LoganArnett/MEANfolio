'use strict';

angular.module('scotchMean')

.controller('ProjectCtrl', function(Restangular) {
    var self = this;
    this.newProject = {};

    this.create = function(project){
      if(project.site == undefined || project.title == undefined || project.desc == undefined || project.tech == undefined || project.demo == undefined || project.site == "" || project.title == "" || project.desc == "" || project.tech == "" || project.demo == ""){
        swal('WOOPS', 'Please fill in all fields', 'warning')
        return false;
      }
      var techList = project.tech.split(',')
      techList.forEach(function(val, i){
          techList[i] = val.trim();
      });
      var newProject = {
        site: project.site,
        title: project.title,
        desc: project.desc,
        tech: techList,
        demo: project.demo
      }

      // $http.post('/api/projects', newProject)
      Restangular.one('api/').post('projects', JSON.stringify(newProject)).then(function(data){
        swal({
          title: 'Success!',
          text: 'The new ' + project.site + ' project has been added',
          type: 'success',
          timer: 1500
        })

        self.newProject.site = "";
        self.newProject.demo = "";
        self.newProject.title = "";
        self.newProject.desc = "";
        self.newProject.tech = "";
      }, function() {
        swal('Oops', 'There was an error saving your project', 'error');
      });

    }

});
