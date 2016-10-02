var app = angular.module('ExampleApplication', ['ngRoute', 'tdc9998.exampleCtrl', 'tdc9998.exampleSvc']);

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
