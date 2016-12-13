(function() {
  'use strict';
  angular.module('common',[])
    .constant('ApiPath','https://qzhou1607-spa-course.herokuapp.com')
    .config(config);

  // config.$inject = ['$httpProvider'];
  // function config($httpProvider) {
  //   $httpProvider.interceptors.push('loadingHttpInterceptor');
  // }

  config.$inject = ['$httpProvider'];
  function config($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }
})();
