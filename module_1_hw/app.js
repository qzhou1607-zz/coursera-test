(function() {
  angular.module('LunchCheckApp',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.getResult = function () {
      var count = getDishNumber($scope.dishes);
      //get message;
      $scope.message = handleMessage(count);
      //change class/style based on dish number
      if (count === 0) {
        $scope.class = "empty";
      }
    }

    //restart class and message in scope
    $scope.clear = function() {
      $scope.class= '';
      $scope.message = '';
    }
    //input: comma separated string containing dishes, string
    //output: number of dishes (non-blank), number
    function getDishNumber(dishes) {
      var count = 0;
      if (dishes != undefined && dishes.length > 0) {
        var dishesArr = dishes.split(',');
        dishesArr.forEach(function(dish) {
          if (dish.length > 0) {
            count += 1;
          }
        });
      }
      return count;
    }

    //return different message based on different dish counts
    //input:dish number, number
    //output:message, string
    function handleMessage(count) {
      var message;
      if (count === 0) {
        message = "Please enter data first";
      } else if (count > 0 && count <= 3) {
        message = "Enjoy!";
      } else {
        message = "Too Much!";
      }
      return message
    }

  }
})();
