'use strict';

angular.module('PersonalApp').factory('Projects', function(Technology, Category){
  var visibleProjects = [];
  var projects = [
    {
      name: 'Personal Canary',
      description: 'A personal security service, designed to signal designated contacts automatically in case of emergency',
      categories: [
        Category.get('privacy')
      ],
      technologies: [
        new Technology('ruby'),
        new Technology('rubyOnRails'),
        new Technology('mariaDb'),
        new Technology('angularJs'),
        new Technology('html5'),
        new Technology('css3')
      ],
      imageURL: 'assets/img/personal-canary.png',
      demoURL: 'https://personal-canary.herokuapp.com',
      sourceURL: 'https://github.com/arekmano/personalCanary'
    },
    {
      name: 'MCGA - Concordia Campus Guide',
      description: 'Mobile Campus Guide Application makes Concordia University geographically accessible',
      categories: [
        Category.get('openSource')
      ],
      technologies: [
        new Technology('android'),
        new Technology('gradle'),
        new Technology('java')
      ],
      imageURL: 'assets/img/mcga.png',
      sourceURL: 'https://github.com/Taimoorrana1/MCGA'
    },
    {
      name: 'Crypto Message Box',
      description: 'An encrypted Key/Value Storage solution. Useful for keeping your information private.',
      categories: [
        Category.get('privacy'),
        Category.get('security'),
        Category.get('restApi')
      ],
      technologies: [
        new Technology('javascript'),
        new Technology('nodeJs'),
        new Technology('mongoDb')
      ],
      sourceURL: 'https://github.com/arekmano/CryptoMessageBox'
    },
    {
      name: 'Concordia Course Api',
      description: 'A simple REST API for the Concordia Course Catalogue',
      categories: [
        Category.get('openSource'),
        Category.get('restApi')
      ],
      technologies: [
        new Technology('nodeJs'),
        new Technology('javascript')
      ],
      imageURL: 'assets/img/concordia-course-api.png',
      demoURL: 'https://concordia-course-api.herokuapp.com',
      sourceURL: 'https://github.com/arekmano/ConcordiaCourseApi'
    },
    {
      name: 'Concordia Course Scraper',
      description: 'A simple ruby gem web scraper for extracting course information from Concordia University\'s web pages.',
      categories: [
        Category.get('openSource'),
        Category.get('library')
      ],
      technologies: [
        new Technology('ruby'),
        new Technology('rubyGem'),
        new Technology('mysql')
      ],
      sourceURL: 'https://github.com/arekmano/ConcordiaCourseScraper'
    }
  ];

  projects.sort(function(a,b){
    if(a.name < b.name) {
      return -1;
    }
    if(a.name > b.name) {
      return 1;
    }
    return 0;
  });

  var refreshProjects = function(category){
    visibleProjects.length = 0;
    angular.forEach(projects, function(project){
      angular.forEach(project.categories, function(cat){
        if (category.categories.indexOf(cat.categories[0]) > -1 && visibleProjects.indexOf(project) < 0){
          visibleProjects.push(project);
        }
      });
    });
  };

  return {
    refreshProjects: refreshProjects,
    projects: visibleProjects
  };
});
