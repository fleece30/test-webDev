(function(){
    'use strict';
    angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope){
        $scope.name="";
        $scope.totalValue=0;
        $scope.calc = function(){
            var totalStringValue=0;
            for(var i=0;i<$scope.name.length;i++){
                totalStringValue += $scope.name.charCodeAt(i);
            }
            $scope.totalValue=totalStringValue;
        }
    });
})();