import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recibo } from '../recibo';
import { AppComponent } from '../app.component';
import { ReciboDataService } from '../recibo-data.service';

@Component({
  selector: 'app-listar-recibo-todos',
  templateUrl: './listar-recibo-todos.component.html',
  styleUrls: ['./listar-recibo-todos.component.css']
})
export class ListarReciboTodosComponent implements OnInit {
	
  constructor(
    private reciboDataService: ReciboDataService,
	public appComponents: AppComponent,
	private router: Router
  ) {
	  this.reciboDataService
      .getAllRecibos()
      .subscribe(
        (recibos) => {
          this.appComponents.recibos = recibos;
        }
      );
  }
  
  public ngOnInit() {
    
  }

  onGetReciboById(recibo: Recibo) {
    this.router.navigate(['/edit',recibo.id]);;
  }

  onRemoveRecibo(recibo) {
    this.reciboDataService
      .deleteReciboById(recibo.id)
      .subscribe(
        (_) => {
          this.appComponents.recibos = this.appComponents.recibos.filter((t) => t.id !== recibo.id);
        }
      );
  }

}