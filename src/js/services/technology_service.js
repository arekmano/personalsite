'use strict';

angular.module('PersonalApp').factory('Technology', function(){
  var technologies = {
    rubyOnRails: {
      name: 'Ruby on Rails',
      iconName: 'devicon-angularjs-plain'
    },
    mariaDb: {
      name: 'MariaDB',
      iconName: 'devicon-angularjs-plain'
    },
    angularJs: {
      name: 'AngularJS',
      iconName: 'devicon-angularjs-plain'
    },
    html5: {
      name: 'HTML5',
      iconName: 'devicon-angularjs-plain'
    },
    css3: {
      name: 'CSS3',
      iconName: 'devicon-angularjs-plain'
    },
    mongoDb: {
      name: 'MongoDB',
      iconName: 'devicon-angularjs-plain'
    },
    nodeJs: {
      name: 'NodeJS',
      iconName: 'devicon-angularjs-plain'
    },
    javascript: {
      name: 'Javascript',
      iconName: 'devicon-angularjs-plain'
    },
    ruby: {
      name: 'Ruby',
      iconName: 'devicon-angularjs-plain'
    },
    rubyGem: {
      name: 'Ruby Gem',
      iconName: 'devicon-angularjs-plain'
    },
    mysql: {
      name: 'MySQL',
      iconName: 'devicon-angularjs-plain'
    }
  };

  function Technology(name){
    this.name = technologies[name].name;
    this.iconName = technologies[name].iconName;
  }
  return Technology;
});
