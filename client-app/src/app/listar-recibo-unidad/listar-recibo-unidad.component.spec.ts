import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReciboUnidadComponent } from './listar-recibo-unidad.component';

describe('ListarReciboUnidadComponent', () => {
  let component: ListarReciboUnidadComponent;
  let fixture: ComponentFixture<ListarReciboUnidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarReciboUnidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReciboUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
