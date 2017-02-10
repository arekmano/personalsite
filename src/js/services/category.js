'use strict';

angular.module('PersonalApp').factory('Category', function(){
  var categories = {
    all: {
      name: 'All',
      selected: true,
      categories: ['openSource', 'privacy', 'library', 'security', 'restApi']
    },
    openSource: {
      name: 'Open Source',
      selected: false,
      categories: ['openSource']
    },
    restApi: {
      name: 'REST API',
      selected: false,
      categories: ['restApi']
    },
    privacy: {
      name: 'Privacy',
      selected: false,
      categories: ['privacy']
    },
    security: {
      name: 'Security',
      selected: false,
      categories: ['security']
    },
    library: {
      name: 'Library',
      selected: false,
      categories: ['library']
    }
  };

  function get(name){
    return categories[name];
  }
  return {
    get: get,
    all: categories
  };
});
