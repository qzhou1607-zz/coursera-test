(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemController',ItemController);

  ItemController.$inject = ['MenuDataService','items'];

  function ItemController(MenuDataService,items) {
    var itemCtrl = this;
    itemCtrl.items = items.menu_items;
    console.log(itemCtrl.items);
    itemCtrl.category = items.category;
  }




})();
