(function() {
  'use strict';
  angular.module('public')
    .config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider'];

    function config($stateProvider,$urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('public', {
          absract: true,
          templateUrl:'src/public/public.template.html'
        })
        .state('public.home', {
          url:'/',
          templateUrl:'src/public/home/home.template.html'
        })
        .state('public.menu', {
          url:'/menu',
          templateUrl:'src/public/categories/menu.template.html',
          controller:'MenuController as MenuCtrl',
          resolve: {
            categories:['MenuService', function(MenuService) {
              return MenuService.getCategories();
            }]
          }
        })

        .state('public.items', {
          url:'/items/{short_name}',
          templateUrl:'src/public/items/items.template.html',
          controller:'ItemsController as itemsCtrl',
          resolve:{
            items: ['MenuService','$stateParams', function(MenuService, $stateParams) {
              return MenuService.getItems($stateParams.short_name);
            }]
          }
        })
    }
})();
