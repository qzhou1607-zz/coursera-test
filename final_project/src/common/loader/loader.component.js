(function() {
  'use strict';

  angular.module('common')
    .component('loader',{
      templateUrl:'src/common/loader/loader.template.html',
      controller:LoaderController
    });

  LoaderController.$inject = ['$rootScope'];
  function LoaderController($rootScope) {
    var $ctrl = this;
    var listener;
    $ctrl.$onInit = function() {
      $ctrl.show = false;
      listener = $rootScope.$on('loader:activate',showLoader);
    }

    $ctrl.$onDestroy = function() {
      listener();
    }

    function showLoader(event,data) {
      $ctrl.show = data.on;
    }
  }
})();
