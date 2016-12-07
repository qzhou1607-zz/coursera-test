(function() {
  'use strict';

  var app = angular.module('MenuApp',['ui.router']);


  //debug for resolve in state change
  app.run(['$rootScope',function($rootScope) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
      console.log(error);
    });
  }]);
})();
