import { Injectable } from '@angular/core';
import { Recibo } from './recibo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReciboDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /recibo
  addRecibo(recibo: Recibo): Observable<Recibo> {
    return this.api.createRecibo(recibo);
  }

  // Simulate DELETE /recibo/:id
  deleteReciboById(reciboId: number): Observable<Recibo> {
    return this.api.deleteReciboById(reciboId);
  }

  // Simulate PUT /recibo/:id
  updateRecibo(recibo: Recibo): Observable<Recibo> {
    return this.api.updateRecibo(recibo);
  }

  // Simulate GET /recibo
  getAllRecibos(): Observable<Recibo[]> {
    return this.api.getAllRecibos();
  }

  // Simulate GET /recibo/:id
  getReciboById(reciboId: number): Observable<Recibo> {
    return this.api.getReciboById(reciboId);
  }

}

