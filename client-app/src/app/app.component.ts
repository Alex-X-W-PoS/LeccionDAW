import { Component, OnInit } from '@angular/core';
import { ReciboDataService } from './recibo-data.service';
import { Recibo } from './recibo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReciboDataService]
})
export class AppComponent implements OnInit {

  recibos: Recibo[] = [];

  constructor(
    private reciboDataService: ReciboDataService
  ) {
  }

  public ngOnInit() {
    this.reciboDataService
      .getAllRecibos()
      .subscribe(
        (recibos) => {
          this.recibos = recibos;
        }
      );
  }

  onAddRecibo(recibo) {
    this.reciboDataService
      .addRecibo(recibo)
      .subscribe(
        (newRecibo) => {
          this.recibos = this.recibos.concat(newRecibo);
        }
      );
  }

  onRemoveRecibo(recibo) {
    this.reciboDataService
      .deleteReciboById(recibo.id)
      .subscribe(
        (_) => {
          this.recibos = this.recibos.filter((t) => t.id !== recibo.id);
        }
      );
  }
}

