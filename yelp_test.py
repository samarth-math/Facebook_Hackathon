from yelp.client import Client
from yelp.oauth1_authenticator import Oauth1Authenticator

auth = Oauth1Authenticator(
    consumer_key="T3I6wngHmzBYY6zmbDpYqA",
    consumer_secret="Z7NA6OdfHWh-O0GJXH3CzU2OaMk",
    token="sQTl6JZxQgUMzxHa6BjPb8G0WCrB_Rr3",
    token_secret="CNb2vkiDNEGl87_ongyTsEgyKPo"
)

client = Client(auth)

params = {
    'term': 'food',
    'lang': 'fr'
}

response = client.search('San Francisco', **params)
print response
print response.businesses

for item in response.businesses:
    print item.name,item.id, item.phone

#print response.id
#print response.is_claimed
#print response.is_closed
