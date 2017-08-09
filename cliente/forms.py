from django import forms

from cliente.models import Factura, Recibo

class FacturaForm (forms.ModelForm):

    class Meta:
        model = Factura

        fields = [
            'numero_factura',
            'nombre_factura',
            'fecha_maxima',
            'cantidad',
            'estado_factura',
        ]
        labels = {
            'numero_factura': 'Numero',
            'nombre_factura': 'Empresa',
            'fecha_maxima': 'Fecha Maxima',
            'cantidad': 'Cantidad',
            'estado_factura': 'Estado',
        }
        widgets = {
            'numero_factura': forms.TextInput(),
            'nombre_factura': forms.Select(),
            'fecha_maxima': forms.DateInput(),
            'cantidad': forms.NumberInput(),
            'estado_factura': forms.Select(),
        }

class ReciboForm (forms.ModelForm):

    class Meta:
        model = Recibo

        fields = [
            'numero_recibo',
            'fecha_pago',
            'nombre_de_quien_recibe',
            'concepto_recibo',
            'cantidad',
        ]
        labels = {
            'numero_recibo': 'Numero',
            'fecha_pago': 'Fecha',
            'nombre_de_quien_recibe': 'Nombre de quien recibe',
            'concepto_recibo': 'Concepto',
            'cantidad': 'Cantidad',
        }
        widgets = {
            'numero_recibo': forms.TextInput(),
            'fecha_pago': forms.DateInput(),
            'nombre_de_quien_recibe': forms.TextInput(),
            'concepto_recibo': forms.Select(),
            'cantidad': forms.NumberInput(),
        }

        
