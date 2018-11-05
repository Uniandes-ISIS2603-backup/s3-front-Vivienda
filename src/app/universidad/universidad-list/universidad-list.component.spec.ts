import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { UniversidadListComponent } from './universidad-list.component';
import {UniversidadService} from '../universidad.service';
import { Universidad } from '../universidad';

describe('UniversidadListComponent', () => {
    let component: UniversidadListComponent;
    let fixture: ComponentFixture<UniversidadListComponent>;
    const universidades: Universidad[] = require('../../../assets/universidades.json');
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ AppRoutingModule, HttpClientModule, AppModule ],
            declarations: [ ],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, UniversidadService ]
        })
        .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(UniversidadListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    
    it('should have a list of books', () => {
        component.universidades = universidades;
        expect(component.universidades.length).toEqual(universidades.length);
    });

    it('a book should be a book (first and last)', () => {
        component.universidades = universidades;
        //revisar todas las universidades
        expect(component.universidades[0].nombre).toEqual(universidades[0].nombre);
        expect(component.universidades[universidades.length - 1].nombre).toEqual(universidades[universidades.length - 1].nombre);
    });
});