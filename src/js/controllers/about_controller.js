'use strict';

angular.module('PersonalApp').controller('AboutController', function(Skill){
  this.skills = Skill.skills;
  this.competencies = Skill.competencies;
});
