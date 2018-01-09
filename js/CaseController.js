app.controller('CaseController', function($scope, $http) {
    $http.get('http://timzh.me/js/matrixle_database.json').then(function(res) {
        $scope.list = res.data;

        $scope.globalSearch = {};
        $scope.filterModelMin = {};
        $scope.filterModelMax = {};
        $scope.clearSearch = function() {

            $scope.globalSearch.School = '';
            $scope.globalSearch.Major = '';
            $scope.filterModelMin.SAT = '';
            $scope.filterModelMax.SAT = '';
            $scope.filterModelMin.ACT = '';
            $scope.filterModelMax.ACT = '';
            $scope.filterModelMin.TOEFL = '';
            $scope.filterModelMax.TOEFL = '';

            document.getElementById('list-div').style.display = "none";
             location.reload()

        }

        $scope.showResult = function() {
          console.log('showResult');
          document.getElementById('list-div').style.display = "block";
        }


        $scope.byRange = function(fieldName, minLikes, maxLikes) {
            console.log('byRange');
            if (minLikes === undefined || maxLikes === undefined || maxLikes === null || minLikes === null) {
                return function predicateFunctionTwo(item) {
                    return item[fieldName];
                }
            } else {

                return function predicateFunc(item) {
                    return minLikes <= item[fieldName] && item[fieldName] <= maxLikes;
                };
            }
        }
    });
});