import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAdicionalEditComponent } from './servicio-adicional-edit.component';

describe('ServicioAdicionalEditComponent', () => {
  let component: ServicioAdicionalEditComponent;
  let fixture: ComponentFixture<ServicioAdicionalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioAdicionalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAdicionalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
