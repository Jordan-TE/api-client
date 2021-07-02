app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/templates/listBooks.html',
            controller: 'ListCtrl'
        })
        .when('/add-book', {
            templateUrl: 'assets/templates/addBook.html',
            controller: 'AddCtrl'
        })
        .when('/edit-book/:id', {
            templateUrl: 'assets/templates/editBook.html',
            controller: 'EditCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});