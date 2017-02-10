'use strict';

angular.module('PersonalApp').controller('ProjectController', function(ProjectService, Category){
  var vm = this;
  vm.categoryOptions = Category.all;

  vm.splitProjects = function(){
    vm.projects1 = ProjectService.projects.slice(0, (ProjectService.projects.length  + 1 ) / 2);
    vm.projects2 = ProjectService.projects.slice((ProjectService.projects.length  + 1 ) / 2, ProjectService.projects.length);
  };

  vm.clickCategory = function(category){
    angular.forEach(vm.categoryOptions, function(cat){
      cat.selected = false;
    });
    category.selected = true;
    ProjectService.refreshProjects(category);
    vm.splitProjects();
  };
  ProjectService.refreshProjects(vm.categoryOptions.all);
  vm.splitProjects();
});
