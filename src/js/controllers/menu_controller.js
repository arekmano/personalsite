'use strict';

angular.module('PersonalApp').controller('MenuController', function($state, $scope){
  var vm = this;
  vm.menuOptions = [
    {
      name: 'About',
      link: 'about'
    },
    {
      name: 'Projects',
      link: 'projects'
    },
    {
      name: 'Contact',
      link: 'contact'
    }
  ];
  vm.initOption = $state;
  vm.openMenu = function($mdMenu, ev) {
    $mdMenu.open(ev);
  };
  vm.setCurrent = function(option){
    vm.current = option;
  };
  $scope.$watch('vm.initOption.current.name', function(newValue){
    angular.forEach(vm.menuOptions, function(obj){
      if (obj.link === newValue){
        vm.current = obj;
      }
    });
  });
});
