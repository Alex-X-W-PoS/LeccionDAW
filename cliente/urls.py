from django.conf.urls import include, url

from cliente.views import create, index_general, eliminarFactura,editarFactura,listar,createRecibo,eliminarRecibo,editarRecibo,index_factura,index_Recibo

app_name = 'factura'

urlpatterns = [
    url(r'^$', index_general, name = 'index'),
    url(r'^factura$', index_factura, name = 'index_factura'),
    url(r'^recibo$', index_Recibo, name = 'index_recibo'),
    url(r'^createRecibo$',createRecibo, name = 'createRecibo'),
    url(r'^create$', create, name = 'create'),
    url(r'^editar/(?P<id>\d+)$', editarFactura, name='editarFactura'),
    url(r'^eliminar/(?P<id>\d+)$', eliminarFactura, name='eliminarFactura'),
    url(r'^editarRecibo/(?P<id>\d+)$', editarRecibo, name='editarRecibo'),
    url(r'^eliminarRecibo/(?P<id>\d+)$', eliminarRecibo, name='eliminarRecibo'),
   
]
