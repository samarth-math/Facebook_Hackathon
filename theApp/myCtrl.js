app.controller("myCtrl", function($scope,$http) {
    $scope.getYelpSearch=function(terms){
        $http.post(url,parameter).success(function(data,status,headers,config){
            //Anil's code
            
        });
    };
    $scope.venues="";
    $scope.getLocuMenu=function(){
        var data =JSON.stringify({"api_key" : "fdbcf44407604a877cac1a01c590adc9bf65128e",
              "fields" : [ "locu_id","name", "menus" ],
              "venue_queries" : [{"locu_id":"13320920d3da8f45ddeb" }]

        });
        $http.post('api.locu.com/v2/venue/search',data).success(function(data,status,headers,config){
            $scope.venues = data;
        })
    }

});