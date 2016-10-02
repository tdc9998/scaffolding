describe("Example Controller", function() {

    var scope;
    var mockExampleService;
    var httpBackend;

    beforeEach(angular.mock.module('tdc9998.exampleCtrl'));

    beforeEach(inject(function($rootScope, $controller, $httpBackend) {
        scope = $rootScope.$new();
        mockExampleService = jasmine.createSpy('exampleService');

        $controller('ExampleController', {
            $scope : scope,
            exampleService : mockExampleService
        });

        httpBackend = $httpBackend;
    }));

    it("Incrementing the counter twice should set the value to two", function() {
        scope.increment();
        scope.increment();
        expect(scope.counter).toEqual(2);
    });

    it("The echoText() message should work", function() {
        mockExampleService.echo = jasmine.createSpy("echo()", "spy").and.returnValue("Van Halen");
        scope.echoContent("Van Halen");
        expect(mockExampleService.echo).toHaveBeenCalled();
    });

    it("An example of mocking HTTP calls", inject(function($http) {

        $http.get('http://localhost:8080/app/example.json')
            .success(function(resp) {
                scope.testResponse = resp;
            })
            .error(function(err) {
                scope.testResponse = null;
            });

        httpBackend
            .when('GET', 'http://localhost:8080/app/example.json')
            .respond(200, {"one": "two"});
        httpBackend.flush();
        expect(scope.testResponse).not.toBeNull();
    }));
});