var app = angular.module('ExampleApplication', ['ngRoute', 'tcrowley.exampleCtrl', 'tcrowley.exampleSvc']);

app.config(function($routeProvider) {
  $routeProvider.when("/example", 
      {"templateUrl": "app/example.html",
       "controller" : "ExampleController"
      });

  $routeProvider.otherwise(
    {"templateUrl": "app/example.html",
     "controller" : "ExampleController"
    });
});
