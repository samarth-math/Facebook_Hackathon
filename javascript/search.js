// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'T3I6wngHmzBYY6zmbDpYqA',
  consumer_secret: 'Z7NA6OdfHWh-O0GJXH3CzU2OaMk',
  token: 'sQTl6JZxQgUMzxHa6BjPb8G0WCrB_Rr3',
  token_secret: 'CNb2vkiDNEGl87_ongyTsEgyKPo',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
    //jsonObj = JSON.parse(data);

    console.log(jsonObj);

    for(var key in jsonObj.businesses) {
        console.log(jsonObj.businesses[key]);
    }
  //console.log(data);
    for(i=0; i<data.length; i++)
        console.log(data[i]);
  //console.log(data);
})
.catch(function (err) {
  console.error(err);
});

// See http://www.yelp.com/developers/documentation/v2/business
//yelp.business('yelp-san-francisco')
//  .then(console.log)
//  .catch(console.error);

//yelp.phoneSearch({ phone: '+15555555555' })
//  .then(console.log)
//  .catch(console.error);

// A callback based API is also available:
//yelp.business('yelp-san-francisco', function(err, data) {
//  if (err) return console.log(error);
//  console.log(data);
//});
