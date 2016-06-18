app.controller("myCtrl", function($scope,$http) {
    $Scope.business_names = {};
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

    $scope.venues="";
    $scope.getLocuMenu=function(){
        var data =JSON.stringify({"api_key" : "dfde5a3db7684a9955eed4596c6007ef18ed6ef7",
              "fields" : [ "locu_id","name", "menus" ],
              "venue_queries" : [{$scope.business_names }]

        });
        $http.post('api.locu.com/v2/venue/search',data).success(function(data,status,headers,config){
            $scope.venues = data;
        })
    }

});
