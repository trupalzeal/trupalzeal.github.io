// routes
myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/search/app-search.html',
      controller: 'searchController'
    })
    .when('/result', {
      templateUrl: 'app/search-result/app-search-result.html',
      controller: 'searchResultController'
    })
    .when('/result/:show', {
      templateUrl: 'app/search-result/app-search-result.html',
      controller: 'searchResultController'
    })
}])
