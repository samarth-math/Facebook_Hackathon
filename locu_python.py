from locu import MenuItemApiClient
menu_item_client = MenuItemApiClient("dfde5a3db7684a9955eed4596c6007ef18ed6ef7")
menu_items = menu_item_client.search(locality = 'San Francisco', name = 'espresso', price__gte = 6)  
print menu_items['objects'][0]
