import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';


import {ServicioAdicionalService} from '../servicio-adicional.service';
import { ServicioAdicional } from '../servicio-adicional';
import { ServicioAdicionalListComponent } from './servicio-adicional-list.component';

describe('ServicioAdicionalListComponent', () => {
  let component: ServicioAdicionalListComponent;
  let fixture: ComponentFixture<ServicioAdicionalListComponent>;
  const serviciosAdicionales: ServicioAdicional[] = require('../../../assets/servicios-adicionales.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, HttpClientModule, AppModule ],
      declarations: [ ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}, ServicioAdicionalService ]
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
  
  it('should have a list of servicios adicionales', () => {
        component.serviciosAdicionales = serviciosAdicionales;
        expect(component.serviciosAdicionales.length).toEqual(serviciosAdicionales.length);
    });

    it('a book should be a servicio adicional (first and last)', () => {
        component.serviciosAdicionales = serviciosAdicionales;
        //revisar todas las universidades
        expect(component.serviciosAdicionales[0].nombre).toEqual(serviciosAdicionales[0].nombre);
        expect(component.serviciosAdicionales[serviciosAdicionales.length - 1].nombre).toEqual(serviciosAdicionales[serviciosAdicionales.length - 1].nombre);
    });
    
});
