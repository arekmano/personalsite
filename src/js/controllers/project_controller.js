'use strict';

angular.module('PersonalApp').controller('ProjectController', function(){
var vm = this;
vm.categories = ['All', 'Open Source', 'Privacy', 'Tools']
vm.projects = [
  {
    name: 'PersonalCanary',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    category: 'Privacy'
  },
  {
    name: 'PersonalCanaryUI',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    category: 'Privacy'
  },
  {
    name: 'EncryptoBox',
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  as',
    category: 'Security'
  }
];

vm.projects1 = vm.projects.slice(0, vm.projects.length / 2 + 1);
vm.projects2 = vm.projects.slice(vm.projects.length / 2 + 1, vm.projects.length);
});
