app.controller('CaseController', function($scope, $http){
 $http.get('matrixle_database.json').then(function(res){
     $scope.list=res.data;
 });
    
});