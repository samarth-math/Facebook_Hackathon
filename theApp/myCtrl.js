app.controller("myCtrl", function($scope,$http) {
    /*$Scope.business_names = {};
    $scope.getYelpSearch=function(terms){
        var url = 'http://api.yelp.com/v2/search';
        var params = {
            callback: 'angular.callbacks._0',
            term: terms,
            oauth_consumer_key: 'T3I6wngHmzBYY6zmbDpYqA',
            oauth_token: 'sQTl6JZxQgUMzxHa6BjPb8G0WCrB_Rr3',
            oauth_signature_method: "HMAC-SHA1",
            oauth_timestamp: new Date().getTime(),
            oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        };
        var consumerSecret = 'Z7NA6OdfHWh-O0GJXH3CzU2OaMk';
        var tokenSecret = 'CNb2vkiDNEGl87_ongyTsEgyKPo';
        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
        params['oauth_signature'] = signature;

        $http.post(url,params).success(function(data,status,headers,config){
            angular.forEach(data.businesses, function(item) {
                $scope.business_names.push(item.name);
            })
        });
    };
*/
    $scope.venues="";
    $scope.getLocuMenu=function(){
        console.log("DEBUG : entered getLocuMenu()");
        var data ={"api_key" : "fdbcf44407604a877cac1a01c590adc9bf65128e",
              "fields" : [ "locu_id","name", "menus" ],
              "venue_queries" : [{"locu_id":"13320920d3da8f45ddeb" }]

        };
        $http.get('http://localhost:3000').success(function(data,status,headers,config){
            $scope.venues = data.venues;
            var menuItems = [];
            var unParsedMIArr = data.venues[3].menus[0].sections[0].subsections[0].contents;
            console.log(unParsedMIArr)

            for(i=0;i<unParsedMIArr.length;i++){
            	menuItems.push(unParsedMIArr[i].name);
            }
            var data1={param:"values"};
            $.ajax({
					type: "POST",
					url: "~/Documents/Experiments/E4/Facebook_Hackathon/ClassifierScript.py",
					data: { param: "data1"}
				}).done(function( o ) {
					console.log(o);
					console.log("Something should've gone down right about now");	
				});
            /*$http.post('/home/sam/Documents/Experiments/E4/Facebook_Hackathon/ClassifierScript',data1).success(function(data,status,headers,config){
            	console.log(data);
            });*/
        })
    }

});
