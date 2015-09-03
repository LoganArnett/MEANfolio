'use strict';

angular.module('scotchMean')

.factory('Nerd', function($http){

  return {
    // get the nerds
    get: function(){
      return $http.get('/api/nerds');
    },

    // these will work when more API routes are defined
    // call to POST and create a new nerd
    create: function(nerdData){
      return $http.post('/api/nerds', nerdData);
    },

    // call to DELETE a nerd
    delete: function(id){
      return $http.delete('/api/nerds' + id);
    }

  }

});
