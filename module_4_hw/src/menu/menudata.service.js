(function() {
  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService',MenuDataService)
  .constant('ApiBaseUrl','https://davids-restaurant.herokuapp.com/');


  MenuDataService.$inject = ['$http','ApiBaseUrl'];
  function MenuDataService($http,ApiBaseUrl){
    var service = this;
    service.getAllCategories = function() {
      return $http({
        method:'GET',
        url:ApiBaseUrl + 'categories.json'
      }).then(function(response) {
        return response.data;
      });
    };


    service.getItemsForCategory = function(short_name) {
      return $http({
        method:'GET',
        url:ApiBaseUrl + 'menu_items.json?category=' + short_name
      }).then(function(response) {
        return response.data;
      })
    }
  }

})();
