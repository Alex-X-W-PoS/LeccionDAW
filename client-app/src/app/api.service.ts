import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response } from '@angular/http';
import { Recibo } from './recibo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllRecibos(): Observable<Recibo[]> {
    return this.http
      .get(API_URL + '/recibo/')
      .map(response => {
        const recibos = response.json();
        return recibos.map((recibo) => new Recibo(recibo));
      })
      .catch(this.handleError);
  }

  public createRecibo(recibo: Recibo): Observable<Recibo> {
    return this.http
      .post(API_URL + '/recibo/', recibo)
      .map(response => {
        return new Recibo(response.json());
      })
      .catch(this.handleError);
  }

  public getReciboById(reciboId: number): Observable<Recibo> {
    return this.http
      .get(API_URL + '/recibo/' + reciboId)
      .map(response => {
        return new Recibo(response.json());
      })
      .catch(this.handleError);
  }

  public updateRecibo(recibo: Recibo): Observable<Recibo> {
    return this.http
      .put(API_URL + '/recibo/' + recibo.id + '/', recibo)
      .map(response => {
        return new Recibo(response.json());
      })
      .catch(this.handleError);
  }

  public deleteReciboById(reciboId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/recibo/' + reciboId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}

