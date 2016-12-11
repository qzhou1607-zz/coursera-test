(function() {
  'use strict';

  angular.module('public')
  .controller('RegistrationController',RegistrationController);

  RegistrationController.$inject = ['MenuService','UserService'];
  function RegistrationController(MenuService,UserService) {
    var reg = this;
    reg.submit= function() {
      //verfiy item
      MenuService.getMenuItem(reg.user.favDish)
      .then(function success(item) {
        reg.notExist = false;
        //save item to service
        var user = {
          firstName:  reg.user.firstname,
          lastName: reg.user.lastname,
          email: reg.user.email,
          phone: reg.user.phone,
          favDish: item
        }
        UserService.setUserInfo(user, function() {
            reg.complete = true;
          }
        );
      },
      function error(err) { // if error in finding the item
        reg.notExist = true;
      })
    };
  }
})();
