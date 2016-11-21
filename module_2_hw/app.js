(function() {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
     var toBuyCtrl = this;
     toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();
     toBuyCtrl.buyItem = function(itemIndex) {
       ShoppingListCheckOffService.buyItem(itemIndex);
     };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtCtrl = this;
    alreadyBoughtCtrl.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    service.toBuyItems = [
      {name:'cookies',quantity:10},
      {name:'apples',quantity:9},
      {name:'oranges',quantity:12},
      {name:'bananas',quantity:8},
      {name:'olive oil',quantity:1},
    ];
    service.alreadyBoughtItems = [];

    //move item from to buy to already bought
    service.buyItem = function(itemIndex) {
      service.alreadyBoughtItems.push(service.toBuyItems[itemIndex]);
      service.toBuyItems.splice(itemIndex,1);
    }

    //get items to buy
    service.getToBuyItems = function() {
      return service.toBuyItems;
    }

    //get items already bought
    service.getAlreadyBoughtItems = function() {
      return service.alreadyBoughtItems;
    }
  }
})();
