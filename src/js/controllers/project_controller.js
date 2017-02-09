'use strict';

angular.module('PersonalApp').controller('ProjectController', function(ProjectService){
  var vm = this;
  vm.categoryOptions = [
    {
      name: 'All',
      selected: true,
      categories: ['Open Source', 'Privacy', 'Library', 'Security']
    },
    {
      name: 'Open Source',
      selected: false,
      categories: ['Open Source']
    },
    {
      name: 'Privacy',
      selected: false,
      categories: ['Privacy']
    },
    {
      name: 'Security',
      selected: false,
      categories: ['Security']
    },
    {
      name: 'Library',
      selected: false,
      categories: ['Library']
    }
  ];

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
  ProjectService.refreshProjects(vm.categoryOptions[0]);
  vm.splitProjects();
});
