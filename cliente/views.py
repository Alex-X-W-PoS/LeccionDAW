from django.shortcuts import render
from cliente.models import Factura,Recibo, Ticket
from cliente.serializers import FacturaSerializer,ReciboSerializer, TicketSerializer
from rest_framework.viewsets import ModelViewSet,generics
from rest_framework.response import Response

# Create your views here.

class FacturaViewSet(ModelViewSet):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

class ReciboViewSet(ModelViewSet):
    queryset = Recibo.objects.all()
    serializer_class = ReciboSerializer

class TicketViewSet(ModelViewSet):
	queryset = Ticket.objects.all()
	serializer_class = TicketSerializer

class UpdateTicket(generics.RetrieveUpdateAPIView):
	queryset = Ticket.objects.all()
	serializer_class = TicketSerializer

	def update(self, request, *args, **kwargs):
        	instance = self.get_object()
        	instance.fecha_emision = request.data.get("fecha_emision")
		instance.origen = request.data.get("origen")
		instance.destino = request.data.get("destino")
		instance.precio = request.data.get("precio")
		instance.adquiriente = request.data.get("adquiriente")
		instance.puesto = request.data.get("puesto")
        	instance.save()

        	serializer = self.get_serializer(instance,data=request.data)
        	serializer.is_valid(raise_exception=False)
        	self.perform_update(serializer)

        	return Response(serializer.data)
