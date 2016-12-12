(function() {
  'use strict';
  angular.module('common')
    .component('categoryTitle',{
      templateUrl:'src/public/category/category.template.html',
      bindings:{
        category:'<'
      }
    });
})();
