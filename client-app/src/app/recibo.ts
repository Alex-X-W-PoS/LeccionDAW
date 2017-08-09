export class Recibo {
  id: number;
  numero_recibo: string = '';
  fecha_pago: Date;
  nombre_de_quien_recibe: string = '';
  concepto_recibo: string[] = ['Agua','Luz','Telefono'];
  cantidad: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

