var app = angular.module('cmTable', []);

app
.controller('mainController', ['$scope', function($scope) {
  $scope.dogSpecies = [
      {name: 'scottish terrier', pattern: 'solid', size: 'small', personality: 'energetic'},
      {name: 'golden retriever', pattern: 'solid', size: 'large'},  
      {name: 'dalmation', pattern: 'spotted', size: 'medium'}  
    ];
}])
.directive('cmTable', [function() {
  return {
    restrict: 'A',
    scope: {
      cmTableData: '='
    },
    link: function(scope, elem, attrs) {
      var $th = elem.find('th'); 
      var attrsArray = [];
      $($th).each(function(th) {
        attrsArray.push($(this).attr('cm-table-param'));
      });
      var tbody = elem.find('tbody'); 
      scope.cmTableData.forEach(function(item) {
        var tr = angular.element('<tr></tr>');
        tbody.append(tr);
        attrsArray.forEach(function(attribute) {
          tr.append('<td>' + item[attribute] + '</td>');
        });
      });
      scope.sortBy = function sortBy(key) {
        if(scope.prop === key) return scope.reverse = !scope.reverse;
        scope.prop = key;
      };
    }
  };
}]);

