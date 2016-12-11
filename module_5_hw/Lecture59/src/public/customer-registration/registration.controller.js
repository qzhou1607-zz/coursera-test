(function() {
  'use strict';

  angular.module('public')
  .controller('RegistrationController',RegistrationController);

  RegistrationController.$inject = ['MenuService'];
  function RegistrationController(MenuService) {
    var reg = this;
    reg.submit= function() {
      //verfiy item
      reg.notExist = false;
      MenuService.getMenuItem(reg.user.favDish)
      .then(function(item) {
        reg.user.selecteditem = item;
        //save item to service
        MenuService.setUserInfo(
          reg.user.firstname,
          reg.user.lastname,
          reg.user.email,
          reg.user.phone,
          reg.user.selecteditem,
          function() {
            reg.complete = true;
          }
        );
      })
      .catch(function(err) {
        console.log(err);
        if (err.status === 500) {
          //item not exist
          reg.notExist = true;
        }
        reg.complete = false;
      })
    };
  }
})();
