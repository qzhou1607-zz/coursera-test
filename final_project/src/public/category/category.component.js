(function() {
  'use strict';
  angular.module('public')
    .component('categoryTile',{
      templateUrl:'src/public/category/category.template.html',
      bindings:{
        category:'<'
      }
    });
})();
