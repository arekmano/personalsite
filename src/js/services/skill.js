'use strict';

angular.module('PersonalApp').factory('Skill', function(){
  var skills = [
    {name: 'Java', level: 0.5},
    {name: 'HTML', level: 0.9},
    {name: 'JavaScript', level: 0.9},
    {name: 'Ruby', level: 0.8}
  ];

  var competencies = [
    {name: 'Coolness', level: 0.5},
    {name: 'Wat', level: 0.5},

  ];
  return {
    skills: skills,
    competencies: competencies
  };
});
