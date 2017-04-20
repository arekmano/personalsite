'use strict';

angular.module('PersonalApp').directive('skill', function($timeout){
  function link(scope) {
    var progressBarOptions = {
      from: {color: '#ED6A5A'},
      to: {color: '#61ed5a'},
      trailColor: '#eee',
      duration: 3000,
      easing: 'easeInOut',
      text: {
        value: '',
        alignToBottom: false,
        style: {
          color: '#eee',
          position: 'absolute',
          left: '50%',
          top: '-25px',
          padding: 0,
          margin: 0,
          transform: {
              prefix: true,
              value: 'translate(-50%, -50%)'
          }
        },
      },
      trailWidth: 1,
      strokeWidth: 2,
      step: function(state, bar) {
        var val = bar.value() * 100;
        bar.setText(Math.round(val) + ' %');
        bar.path.setAttribute('stroke', state.color);
      },
      svgStyle: {
        width: '100%',
        height: '100%'
      },
    };
    $timeout(function() {
      var circle = new ProgressBar.Line('#progress' + scope.skill.name, progressBarOptions);
      circle.animate(scope.skill.level);
    });
  }


  return {
    restrict: 'E',
    templateUrl: 'skill.html',
    link: link
  };
});
