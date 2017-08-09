# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from cliente.models import Factura, Recibo
from cliente.forms import FacturaForm, ReciboForm
from django.contrib import messages


# Create your views here.
def index_general(request):
    return render(request,'index.html',{})

def index_factura(request):
    facturas = Factura.objects.filter(estado_factura='Pendiente')
    return render(request,'facturas/factura_listaPendiente.html',{'facturas':facturas})


def create(request):
    if request.method == 'POST':
        form = FacturaForm(request.POST)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'Factura creada con exito!')
        return redirect('factura:index_factura')
    else:
        form = FacturaForm()
        messages.add_message(request, messages.SUCCESS, 'Error al crear Factura!')
    return render(request, 'facturas/factura_formulario.html',{'form':form})

def createRecibo(request):
    if request.method == 'POST':
        form = ReciboForm(request.POST)
        if form.is_valid():
            form.save()
            messages.add_message(request, messages.SUCCESS, 'Recibo creada con exito!')
        return redirect('factura:index_recibo')
    else:
        form = ReciboForm()
        messages.add_message(request, messages.SUCCESS, 'Error al crear Recibo!')
    return render(request, 'recibos/recibo_formulario.html',{'form':form})

    
def listar(request):
    facturas = Factura.objects.filter(estado_factura='Pendiente')
    return render(request,'facturas/factura_listaPendiente.html',{'facturas':facturas})


def eliminarFactura(request, id):
    factura = Factura.objects.get(id=id)
    if request.method == 'POST':
        factura.delete()
        return redirect('factura:index_factura')
    return render(request, 'facturas/factura_eliminar.html', {'facturas': factura})

def editarFactura(request, id):
    factura = Factura.objects.get(id=id)
    if request.method =='GET':
        form = FacturaForm(instance=factura)
    else:
        form = FacturaForm(request.POST, instance=factura)
        if form.is_valid():
            form.save()
        return redirect('factura:index_factura')
    return render(request, 'facturas/factura_formulario.html',{'form':form})

def index_Recibo(request):
    recibos = Recibo.objects.all()
    return render(request,'recibos/lista_recibo.html',{'recibos':recibos})

def editarRecibo(request, id):
    recibo = Recibo.objects.get(id=id)
    if request.method =='GET':
        form = ReciboForm(instance=recibo)
    else:
        form = ReciboForm(request.POST, instance=recibo)
        if form.is_valid():
            form.save()
        return redirect('factura:index_recibo')
    return render(request, 'recibos/recibo_editar.html',{'form':form})

def eliminarRecibo(request, id):
    recibo = Recibo.objects.get(id=id)
    if request.method == 'POST':
        recibo.delete()
        return redirect('factura:index_recibo')
    return render(request, 'recibos/recibo_eliminar.html', {'recibos': factura})

