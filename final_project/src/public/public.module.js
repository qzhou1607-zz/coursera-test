(function() {
  'use strict';

  var app = angular.module('public',['ui.router']);

  //debug for resolve in state change
  app.run(['$rootScope',function($rootScope) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
      console.log(error);
    });
  }]);

})();
