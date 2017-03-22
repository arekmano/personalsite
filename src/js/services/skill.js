'use strict';

angular.module('PersonalApp').factory('Skill', function(){
  var skills = [
    {name: 'Java', level: 0.8},
    {name: 'HTML', level: 0.9},
    {name: 'JavaScript', level: 0.9},
    {name: 'Ruby', level: 0.6},
    {name: 'Android', level: 0.4},
    {name: 'MongoDB', level: 0.8},
    {name: 'MySQL', level: 0.6}
  ];

  var competencies = [
    {name: 'Coolness', level: 0.9},
    {name: 'Explosions', level: 0.1},
    {name: 'Shrodingerness', level: 0.5}
  ];
  return {
    skills: skills,
    competencies: competencies
  };
});
