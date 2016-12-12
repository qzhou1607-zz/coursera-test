(function() {
  'use strict';
  angular.module('public')
    .controller('MenuController',MenuController);

    MenuController.$inject = ['categories'];

    function MenuController(categories) {
      var MenuCtrl = this;
      MenuCtrl.categories = categories;
    }
})();
