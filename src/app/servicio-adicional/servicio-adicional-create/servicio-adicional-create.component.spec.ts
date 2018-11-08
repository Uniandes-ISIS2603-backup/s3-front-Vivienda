import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAdicionalCreateComponent } from './servicio-adicional-create.component';

describe('ServicioAdicionalCreateComponent', () => {
  let component: ServicioAdicionalCreateComponent;
  let fixture: ComponentFixture<ServicioAdicionalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioAdicionalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAdicionalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
