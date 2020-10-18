import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaClienteComponent } from './saida-cliente.component';

describe('SaidaClienteComponent', () => {
  let component: SaidaClienteComponent;
  let fixture: ComponentFixture<SaidaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaidaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
