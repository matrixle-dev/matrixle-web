app.controller('SchoolController', function($scope, $http) {
    $http.get('data_out.json').then(function(res) {
        console.log("success");
        $scope.list = res.data;

        $scope.globalSearch = {};
      
        $scope.clearSearch = function() {

            $scope.globalSearch.chinese_name = '';
           

            document.getElementById('list-div').style.display = "none";


        }

        $scope.showResult = function() {
          console.log('showResult');
          document.getElementById('list-div').style.display = "block";
        }


       
    }).catch(function() {
        //handle errors
    });
});