import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReciboTodosComponent } from './listar-recibo-todos.component';

describe('ListarReciboTodosComponent', () => {
  let component: ListarReciboTodosComponent;
  let fixture: ComponentFixture<ListarReciboTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarReciboTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReciboTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
