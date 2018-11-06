import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAdicionalListComponent } from './servicio-adicional-list.component';

describe('ServicioAdicionalListComponent', () => {
  let component: ServicioAdicionalListComponent;
  let fixture: ComponentFixture<ServicioAdicionalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioAdicionalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAdicionalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
