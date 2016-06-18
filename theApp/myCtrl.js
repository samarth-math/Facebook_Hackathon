app.controller("myCtrl", function($scope) {
	//$scope.name="Anil";

    $scope.getYelpSearch(terms){
    	$http.post(url,parameter).success(function(data,status,headers,config){

    	});
    };

    $scope.getLocuMenu(locuids){
    	var data =JSON.stringify({"api_key" : "fdbcf44407604a877cac1a01c590adc9bf65128e",
    		  "fields" : [ "locu_id","name", "menus" ],
    		  "venue_queries" : locuids

    	});
    	$http.post('api.locu.com/v2/venue/search',data).success(function(data,status,headers,config){

    	})
    }

});