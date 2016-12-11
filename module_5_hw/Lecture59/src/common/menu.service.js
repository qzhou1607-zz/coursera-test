(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var user = null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function(item) {
    var config = {};
    return $http.get(ApiPath + '/menu_items/' + item + '.json')
            .then(function(response) {
              return response.data;
            });
  }

  service.getSelectedItem = function() {
    return selectedItem;
  }

  service.setUserInfo = function(firstName, lastName, email, phone, favDish, callback) {
    try {
      user = {};
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.phone = phone;
      user.favDish = favDish;
      callback();
    } catch(error) {
      throw new Error('Something is wrong with the saving process...')
    }

  }

  service.getUserInfo = function() {
    if (user) {
      return user;
    } else {
      throw new Error('User was not defined!');
    }
  }

}



})();
