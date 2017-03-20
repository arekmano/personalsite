'use strict';

angular.module('PersonalApp').factory('Technology', function(){
  var technologies = {
    rubyOnRails: {
      name: 'Ruby on Rails',
      iconName: 'devicon-rails-plain'
    },
    mariaDb: {
      name: 'MariaDB',
      iconName: 'devicon-mysql-plain'
    },
    angularJs: {
      name: 'AngularJS',
      iconName: 'devicon-angularjs-plain'
    },
    html5: {
      name: 'HTML5',
      iconName: 'devicon-html5-plain'
    },
    css3: {
      name: 'CSS3',
      iconName: 'devicon-css3-plain'
    },
    mongoDb: {
      name: 'MongoDB',
      iconName: 'devicon-mongodb-plain'
    },
    nodeJs: {
      name: 'NodeJS',
      iconName: 'devicon-nodejs-plain'
    },
    javascript: {
      name: 'Javascript',
      iconName: 'devicon-javascript-plain'
    },
    ruby: {
      name: 'Ruby',
      iconName: 'devicon-ruby-plain'
    },
    rubyGem: {
      name: 'Ruby Gem',
      iconName: 'devicon-ruby-plain'
    },
    mysql: {
      name: 'MySQL',
      iconName: 'devicon-mysql-plain'
    },
    android: {
      name: 'Android',
      iconName: 'devicon-android-plain'
    },
    gradle: {
      name: 'Gradle',
      iconName: 'devicon-gradle-plain'
    },
    java: {
      name: 'Java',
      iconName: 'devicon-java-plain'
    }
  };

  function Technology(name){
    this.name = technologies[name].name;
    this.iconName = technologies[name].iconName;
  }
  return Technology;
});
