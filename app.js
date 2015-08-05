var app = angular.module('cmTable', []);

app
.controller('mainController', ['$scope', function($scope) {
  $scope.dogSpecies = {
    rows: [
      {name: 'scottish terrier', pattern: 'solid', size: 'small', personality: 'energetic'},
      {name: 'golden retriever', pattern: 'solid', size: 'large'},  
      {name: 'dalmation', pattern: 'spotted', size: 'medium'}  
    ]
  };
  console.log($scope);
}])
.directive('cmTable', [function() {
  return {
    restrict: 'A',
    templateUrl: './cmtable.html',
    scope: {
      cmTableData: '=' 
    },
    link: function(scope, elem, attrs) {
      scope.tabledata = scope.cmTableData;
      console.log(scope.dogSpecies);
      scope.sortBy = function sortBy(key) {
        if(scope.prop === key) return scope.reverse = !scope.reverse;
        scope.prop = key;
      };
    }
  };
}]);
