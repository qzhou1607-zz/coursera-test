(function() {
  'use strict';

  angular.module('common')
    .service('UserService', UserService);

  UserService.$inject = ['$q'];
  function UserService($q) {
    var service = this;
    service.setUserInfo = function(user,callback) {
      try {
        service.user = user;
        callback();
      } catch(error) {
        throw new Error('Something is wrong with the saving process...')
      }

    }

    service.getUserInfo = function() {
      var deferred = $q.defer();
      if (service.user) {
        deferred.resolve(service.user);
      } else {
        deferred.reject('user was not defined');
      }
      return deferred.promise;

    }
  }
})();
