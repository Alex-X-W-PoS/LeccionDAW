import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recibo } from '../recibo';

@Component({
  selector: 'app-listar-recibo-unidad',
  templateUrl: './listar-recibo-unidad.component.html',
  styleUrls: ['./listar-recibo-unidad.component.css']
})
export class ListarReciboUnidadComponent {

  @Input() recibo: Recibo;

  @Output()
  remove: EventEmitter<Recibo> = new EventEmitter();

  @Output()
  edit: EventEmitter<Recibo> = new EventEmitter();

  constructor() {
  }

  getReciboById(recibo: Recibo) {
    this.edit.emit(recibo);
  }

  removeRecibo(recibo: Recibo) {
    this.remove.emit(recibo);
  }

}