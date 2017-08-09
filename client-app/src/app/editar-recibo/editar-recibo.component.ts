import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Recibo } from '../recibo'
import { AppComponent } from '../app.component';
import { ReciboDataService } from '../recibo-data.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-editar-recibo',
  templateUrl: './editar-recibo.component.html',
  styleUrls: ['./editar-recibo.component.css']
})
export class EditarReciboComponent implements OnInit {
	
  recibo: Recibo;
  
  conceptos = ['Agua', 'Luz','Telefono'];

  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private reciboDataService: ReciboDataService, 
  private appComponents: AppComponent
  ) { }

  ngOnInit() {
	  this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.reciboDataService.getReciboById(Number(params.get('id'))))
    .subscribe((recibo: Recibo) => this.recibo = recibo);
  }
  
  onEditRecibo(recibo) {
    this.reciboDataService
      .updateRecibo(recibo)
      .subscribe(
        (updatedRecibo) => {
          recibo = updatedRecibo;
        }
      );
	  this.router.navigate(['/list']);
  }

}
