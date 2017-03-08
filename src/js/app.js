'use strict';

angular.module('templates', []);
angular.module(
  'PersonalApp',
  ['sticky', 'ui.router', 'ngMaterial', 'templates', 'ngAnimate']
).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
    name: 'about',
    url: '/',
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
  $urlRouterProvider.otherwise('/');
});
