curl -X POST https://api.locu.com/v2/venue/search -d '{  
    "api_key" : "dfde5a3db7684a9955eed4596c6007ef18ed6ef7",  
    "fields" : [ "name", "location", "contact", "menus" ],  
    "venue_queries" : 
        [    
            {      
                "name" : "bistro central parc"
            }  
        ]
}'
