myApp.controller('searchController', ['$scope', '$location', 'showService',
  function ($scope, $location, showService) {
    $scope.show = showService.show

    $scope.$watch('show', function (newValue, _) {
      showService.show = newValue
    });

    $scope.submit = function () {
      $location.path(`/result/${$scope.show}`)
    }

  }]
)

