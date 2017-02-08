'use strict';

angular.module('PersonalApp').factory('ProjectService', function(){
  var visibleProjects = [];
  var projects = [
    {
      name: 'Personal Canary',
      description: 'A personal security service, designed to signal designated contacts automatically in case of emergency',
      categories: ['Privacy'],
      show: true
    },
    {
      name: 'Crypto Message Box',
      description: 'An encrypted Key/Value Storage solution. Useful for keeping your information private.',
      categories: ['Privacy', 'Security'],
      show: true
    },
    {
      name: 'Concordia Course Api',
      description: 'A simple REST API for the Concordia Course Catalogue',
      categories: ['Open Source'],
      show: true
    },
    {
      name: 'Concordia Course Scraper',
      description: "A simple ruby gem web scraper for extracting course information from Concordia University's web pages.",
      categories: ['Open Source', 'Library'],
      show: true
    }
  ];

  var refreshProjects = function(category){
    visibleProjects.length = 0;
    angular.forEach(projects, function(project){
      angular.forEach(project.categories, function(cat){
        if (category.categories.indexOf(cat) > -1 && visibleProjects.indexOf(project) < 0){
          project.show = true;
        } else {
          project.show = false;
        }
      })
    });
  };

  return {
    refreshProjects: refreshProjects,
    projects: projects
  };
});
