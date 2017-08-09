from cliente.models import Factura, Recibo, Ticket
from rest_framework.serializers import ModelSerializer


class FacturaSerializer(ModelSerializer):
    class Meta:
        model = Factura
        fields = ('numero_factura','nombre_factura','fecha_maxima','cantidad','estado_factura')


class ReciboSerializer(ModelSerializer):
	class Meta:
		model = Recibo
		fields = ('id','numero_recibo','fecha_pago','nombre_de_quien_recibe','concepto_recibo','cantidad')

class TicketSerializer(ModelSerializer):
	class Meta:
		model = Ticket
		fields = ('id','fecha_emision','origen','destino','precio','adquiriente','puesto')
