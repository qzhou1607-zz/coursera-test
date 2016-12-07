(function() {
  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService',MenuDataService);

  var categoryUrl = 'https://davids-restaurant.herokuapp.com/categories.json';
  var itemBaseUrl = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var service = this;
    service.getAllCategories = function() {
      return $http({
        method:'GET',
        url:categoryUrl
      }).then(function(response) {
        return response.data;
      });
    };


    service.getItemsForCategory = function(short_name) {
      return $http({
        method:'GET',
        url:itemBaseUrl + short_name
      }).then(function(response) {
        return response.data;
      })
    }
  }

})();
