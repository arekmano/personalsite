'use strict';

angular.module('PersonalApp').factory('ProjectService', function(){
  var visibleProjects = [];
  var projects = [
    {
      name: 'Personal Canary',
      description: 'A personal security service, designed to signal designated contacts automatically in case of emergency',
      categories: ['Privacy']
    },
    {
      name: 'Crypto Message Box',
      description: 'An encrypted Key/Value Storage solution. Useful for keeping your information private.',
      categories: ['Privacy', 'Security']
    },
    {
      name: 'Concordia Course Api',
      description: 'A simple REST API for the Concordia Course Catalogue',
      categories: ['Open Source']
    },
    {
      name: 'Concordia Course Scraper',
      description: "A simple ruby gem web scraper for extracting course information from Concordia University's web pages.",
      categories: ['Open Source', 'Library']
    }
  ];

  var refreshProjects = function(category){
    visibleProjects.length = 0;
    angular.forEach(projects, function(project){
      angular.forEach(project.categories, function(cat){
        if (category.categories.indexOf(cat) > -1 && visibleProjects.indexOf(project) < 0){
          visibleProjects.push(project);
        }
      })
    });
  };

  return {
    refreshProjects: refreshProjects,
    projects: visibleProjects
  };
});
