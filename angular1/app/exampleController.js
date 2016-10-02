angular.module('tdc9998.exampleCtrl',[])

  // Angular auto-injects the scope for this controller
  .controller('ExampleController', function($scope, exampleService) {
    console.log("Example Controller");

    $scope.msg = "";
    $scope.counter = 0;

    $scope.cities = [
      {"city": "Miami", "state": "FL"},
      {"city": "Atlanta", "state": "GA"},
      {"city": "Albany", "state": "NY"}
    ];

    $scope.increment = function() {
      $scope.counter = $scope.counter + 1;
    };

    // A simplistic example of calling a service from a controller
    $scope.echoContent = function(echoText) {
      var x = exampleService.echo(echoText);
      alert(x);
    }

    $scope.getContent = function() {
      exampleService.loadText().then(
        // Success
        function(res) {
          alert("Success - " + res.data.message);
        },
        // Failure
        function(err) {
          alert("Failure" + JSON.stringify(err));
        }
      );
    }

  });
