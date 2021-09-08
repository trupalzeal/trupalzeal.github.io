(function () {
  'use strict';

  angular
    .module('myApp')
    .directive('appSearchItem', appSearchItem);

  appSearchItem.$inject = [];

  function appSearchItem() {
    var directive = {
      link: link,
      restrict: 'EA',
      scope: {
        aShow: '=',
      },
      templateUrl: 'app/search-result/search-item/app-search-item.html'
    };

    function link($scope, $element, $attrs, controller) {
      console.log('$attrs :>> ', $attrs);
    }

    return directive;
  }

})();