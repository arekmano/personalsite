'use strict';

angular.module(
  'PersonalApp',
  ['sticky', 'ui.router', 'ngMaterial']
).config(function($stateProvider) {
  $stateProvider
    .state({
    name: 'about',
    url: '/about',
    controller: 'AboutController',
    controllerAs: 'vm',
    templateUrl: 'about.html'
  }).state({
    name: 'contact',
    url: '/contact',
    controller: 'ContactController',
    controllerAs: 'vm',
    templateUrl: 'contact.html'
  }).state({
    name: 'projects',
    url: '/projects',
    controller: 'ProjectController',
    controllerAs: 'vm',
    templateUrl: 'projects.html'
  });
});
