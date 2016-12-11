(function() {
  'use strict';
  angular.module('public')
    .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['MenuService'];
  function UserInfoController(MenuService) {
    var userInfoCtrl = this;
    userInfoCtrl.userUndefined = true;
    console.log(userInfoCtrl.userUndefined)
    try {
      var user = MenuService.getUserInfo();
      userInfoCtrl.firstname = user.firstName;
      userInfoCtrl.lastname = user.lastName;
      userInfoCtrl.phone = user.phone;
      userInfoCtrl.email = user.email;
      userInfoCtrl.favDish = user.favDish;
      userInfoCtrl.userUndefined = false;
    } catch (err) {
      console.log('user was not defined!');
    }

  }
})();
