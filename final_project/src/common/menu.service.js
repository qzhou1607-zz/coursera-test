(function() {
  'use strict';
  angular.module('common')
    .service('MenuService',MenuService);

  MenuService.$inject = ['$http','ApiPath'];
  function MenuService($http, ApiPath) {
    var service = this;
    service.getCategories = function() {
      return $http.get(ApiPath + '/categories.json').then(
        function(response) {
          return response.data;
        }
      );
    }

    service.getItems = function(category) {
      var config = {};
      config.params = {'category':category}
      return $http.get(ApiPath + '/menu_items.json', config)
                  .then(function(response) {
                    console.log(response.data);
                    return response.data;
                  })
    }
  }

})();
