import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReciboDataService } from './recibo-data.service'
import { CrearReciboComponent } from './crear-recibo/crear-recibo.component';
import { EditarReciboComponent } from './editar-recibo/editar-recibo.component';
import { ApiService } from './api.service';
import { ListarReciboTodosComponent } from './listar-recibo-todos/listar-recibo-todos.component';
import { ListarReciboUnidadComponent } from './listar-recibo-unidad/listar-recibo-unidad.component';

const appRoutes: Routes = [
  { path: 'create', component: CrearReciboComponent },
  { path: 'list', component: ListarReciboTodosComponent },
  { path: 'edit/:id', component: EditarReciboComponent },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CrearReciboComponent,
    EditarReciboComponent,
    ListarReciboTodosComponent,
    ListarReciboUnidadComponent
  ],
  imports: [
	RouterModule.forRoot(
		appRoutes),
    BrowserModule,
	FormsModule,
	HttpModule
  ],
  providers: [ReciboDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
