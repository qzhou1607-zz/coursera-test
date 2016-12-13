(function() {
  'use strict';

  angular.module('public')
    .component('itemTile',{
      templateUrl:'src/public/item/item.template.html',
      bindings: {
        item:'<'
      },
      controller:ItemController
    });

  ItemController.$inject = ['ApiPath'];
  function ItemController(ApiPath) {
    var $ctrl = this;
    $ctrl.apiPath = ApiPath;
  }


})();
