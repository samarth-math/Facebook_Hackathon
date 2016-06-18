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
        var data ={"api_key" : "fdbcf44407604a877cac1a01c590adc9bf65128e",
              "fields" : [ "locu_id","name", "menus" ],
              "venue_queries" : [{"locu_id":"13320920d3da8f45ddeb" }]

        };
        $http.get('http://127.0.0.7:3000').success(function(data,status,headers,config){
            $scope.venues = data;
        })
    }

});