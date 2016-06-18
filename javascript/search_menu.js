var request = require('request');

var dataString = '{  "api_key" : "dfde5a3db7684a9955eed4596c6007ef18ed6ef7",  "fields" : [ "name", "location", "contact", "menus" ],  "venue_queries" : [    {   "name" : "bistro central parc" }  ] }';

var options = {
    url: 'https://api.locu.com/v2/venue/search',
    method: 'POST',
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
