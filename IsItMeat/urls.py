from django.conf.urls import url, include
from rest_framework import routers
from IsItMeat import views

router = routers.DefaultRouter()
router.register(r'veganScore', views.VeganViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^/findveganscore', include('rest_framework.urls', namespace='rest_framework'))
]
