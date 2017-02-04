'use strict';

angular.module('PersonalApp').factory('ProjectService', function(){
  var visibleProjects = [];
  var projects = [
    {
      name: 'PersonalCanary',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      category: 'Privacy'
    },
    {
      name: 'PersonalCanaryUI',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
      category: 'Privacy'
    },
    {
      name: 'EncryptoBox',
      description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  as',
      category: 'Security'
    }
  ];

  var refreshProjects = function(category){
    visibleProjects.length = 0;
    angular.forEach(projects, function(project){
      if (category.categories.indexOf(project.category) > -1){
        visibleProjects.push(project);
      }
    });
  };

  return {
    refreshProjects: refreshProjects,
    projects: visibleProjects
  };
});
