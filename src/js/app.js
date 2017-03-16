'use strict';

angular.module('templates', []);
angular.module(
  'PersonalApp',
  ['sticky', 'ui.router', 'ngMaterial', 'templates', 'ngAnimate']
).config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
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

  $mdThemingProvider.definePalette('primaryPalette', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': '415D75', // Changed
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100',
     '200', '300', '400', 'A100'],
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('primaryPalette');
});
