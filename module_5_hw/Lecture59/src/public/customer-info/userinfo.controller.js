(function() {
  'use strict';
  angular.module('public')
    .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['MenuService','UserService'];
  function UserInfoController(MenuService, UserService) {
    var userInfoCtrl = this;
      UserService.getUserInfo().then(function success(user) {
        userInfoCtrl.firstname = user.firstName;
        userInfoCtrl.lastname = user.lastName;
        userInfoCtrl.phone = user.phone;
        userInfoCtrl.email = user.email;
        userInfoCtrl.favDish = user.favDish;
        userInfoCtrl.userUndefined = false;
      }, function error(response) {
        userInfoCtrl.userUndefined = true;
      });
  }
})();
