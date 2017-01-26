angular.module(
  'PersonalApp',
  ['sticky', 'ui.router']
).config(function($stateProvider) {
  $stateProvider
    .state({
    name: 'about',
    url: '/about',
    controller: 'AboutController',
    templateUrl: 'about.html'
  }).state({
    name: 'contact',
    url: '/contact',
    controller: 'ContactController',
    templateUrl: 'contact.html'
  }).state({
    name: 'projects',
    url: '/projects',
    controller: 'ProjectController',
    templateUrl: 'projects.html'
  })
});
