angular.module('tcrowley.exampleSvc',[])

// Include promises (defer) and http in this service
.factory("exampleService", function($q, $http) {

    var curService = {};

    // A very simple method
    curService.echo = function(echoText) {
        return "ECHO: " + echoText;
    };

    // A sample promise 
    curService.loadText = function() {
      var def = $q.defer();

      $http.get("app/example.json?id=" + new Date().getTime())
        .then(function(res) {
            def.resolve(res);
        }, function(err) {
            def.reject(err);
        }
      );

      return def.promise;
    };

    return curService;
});