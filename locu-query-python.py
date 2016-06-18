import requests

data = '{ "api_key" : "dfde5a3db7684a9955eed4596c6007ef18ed6ef7", "fields" : [ "name", "menus" ],  "venue_queries" : [    { "location" : { "locality" : ["Seattle"] }   }  ] }'

r = requests.post('https://api.locu.com/v2/venue/search', data=data)
print r.status_code
print r.headers['content-type']
print r.text
print r.json
