import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAdicionalDetailComponent } from './servicio-adicional-detail.component';

describe('ServicioAdicionalDetailComponent', () => {
  let component: ServicioAdicionalDetailComponent;
  let fixture: ComponentFixture<ServicioAdicionalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioAdicionalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAdicionalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
