var app = angular.module("app", ['ngRoute']);
const api_url = 'http://127.0.0.1:8000';

app.controller('ListCtrl', function ($scope, $http, $location) {
    $http.get(api_url + '/book').then(function (data) {
        $scope.books = data.data;
    });

    $scope.delete = function (book) {
        var deletebook = confirm('Are you absolutely sure you want to delete?');
        if (deletebook) {
            $http.delete(api_url + '/book/' + book.id);
            var index = $scope.books.indexOf(book);
            $scope.books.splice(index, 1);
            $scope.activePath = $location.path('/');
        }
    };
});

app.controller('EditCtrl', function ($scope, $http, $location, $routeParams) {
    var id = $routeParams.id;
    $scope.activePath = null;

    $http.get(api_url + '/book/' + id).then(function (data) {
        $scope.book = data.data;
    });

    $scope.update = function (book) {
        $http.put(api_url + '/book/' + id, book).then(function (data) {
            $scope.book = data;
            $scope.activePath = $location.path('/');
        });
    };
});


app.controller('AddCtrl', function ($scope, $http, $location) {
    $scope.master = {};
    $scope.activePath = null;

    $scope.add = function (book, AddForm) {
        $http.post(api_url + '/book', book).then(function () {
            $scope.activePath = $location.path('/');
        });
        $scope.activePath = $location.path('/');


    };
});
















