'use strict';

angular.module('PersonalApp').controller('ProjectController', function(Projects, Category){
  var vm = this;
  vm.categoryOptions = Category.all;
  vm.selectedCategory = Category.all.all;

  vm.splitProjects = function(){
    vm.projects1 = [];
    vm.projects2 = [];
    for (var i=0;i<Projects.projects.length;i++){
      if ( (i+2)%2 === 0) {
        vm.projects1.push(Projects.projects[i]);
      }
      else {
        vm.projects2.push(Projects.projects[i]);
      }
    }
  };

  vm.openMenu = function($mdMenu, ev) {
    $mdMenu.open(ev);
  };

  vm.clickCategory = function(category){
    angular.forEach(vm.categoryOptions, function(cat){
      cat.selected = false;
    });
    category.selected = true;
    vm.selectedCategory = category;
    Projects.refreshProjects(category);
    vm.splitProjects();
  };
  Projects.refreshProjects(vm.selectedCategory);
  vm.splitProjects();
});
