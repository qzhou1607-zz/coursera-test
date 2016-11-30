(function() {
  'use strict';

  angular.module('NarrowDownApp',[])
  .controller('NarrowDownController', NarrowDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('MenuUrl','https://davids-restaurant.herokuapp.com/menu_items.json')
  .directive('foundItems',foundItems);

  function foundItems() {
    var ddo = {
      templateUrl:'filteredItems.html',
      scope:{
        items:'<',
        onRemove:'&',
      },
      controller:foundItemController,
      controllerAs:'menu',
      bindToController:true
    }
    return ddo;
  }

  function foundItemController() {
    var menu = this;
    menu.notFound = function() {
      if (menu.items !== undefined && menu.items.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  NarrowDownController.$inject = ['MenuSearchService'];
  function NarrowDownController(MenuSearchService) {
    var menu = this;

    menu.getMatchedMenuItems = function() {
      if (this.searchTerm === undefined || (this.searchTerm !== undefined && this.searchTerm.length === 0)) {
        this.items = [];
      } else {
        var promise = MenuSearchService.getMatchedMenuItems(this.searchTerm);
        promise.then(function(filteredItems) {
          menu.items = filteredItems;
        });
      }
    };

    menu.deleteItem = function(itemIndex) {
      menu.items.splice(itemIndex,1);
    }
  }

  MenuSearchService.$inject = ['$http','MenuUrl'];
  function MenuSearchService($http,MenuUrl) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      var promise = $http({
        method:"GET",
        url:MenuUrl
      }).then(function(response) {
        var filteredItems = response.data.menu_items.filter(function(item) {
          if (item.description.indexOf(searchTerm) !== -1) {
            return true;
          }
          return false;
        });
        return filteredItems;
      });

      return promise;
    };


  }
})();
