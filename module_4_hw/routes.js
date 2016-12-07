//states: home,category,items
//service to fetch category and item
//controller for category and items
//category and item components
//routes:home,category,items (resolve using service, than pass on)
//templates: home,category,item
(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    //home page
    .state('home', {
      url:'/',
      templateUrl:'src/menu/templates/home.template.html'
    })

    .state('categories',{
      url:'/categories',
      templateUrl:'src/menu/templates/categories.template.html',
      controller:'CategoryController as categoryCtrl',
      resolve:{
        categories:['MenuDataService',function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items',{
      url:'/items/{short_name}',
      templateUrl:'src/menu/templates/items.template.html',
      controller:'ItemController as itemCtrl',
      resolve:{
        items:['MenuDataService','$stateParams', function(MenuDataService,$stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.short_name);
        }]
      }
    });


  }



})();
