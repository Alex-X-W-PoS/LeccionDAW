import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recibo } from '../recibo'
import { AppComponent } from '../app.component';
import { ReciboDataService } from '../recibo-data.service';

@Component({
  selector: 'app-crear-recibo',
  templateUrl: './crear-recibo.component.html',
  styleUrls: ['./crear-recibo.component.css']
})
export class CrearReciboComponent {

  conceptos = ['Agua', 'Luz','Telefono'];
	
  newRecibo: Recibo = new Recibo();

  constructor( private router: Router, private reciboDataService: ReciboDataService, private appComponents: AppComponent) {
  }
  
  onAddRecibo(recibo) {
    this.reciboDataService
      .addRecibo(recibo)
      .subscribe(
        (newRecibo) => {
          this.appComponents.recibos = this.appComponents.recibos.concat(newRecibo);
        }
      );
	  this.newRecibo = new Recibo();
	  this.router.navigate(['/list']);
  }

}
