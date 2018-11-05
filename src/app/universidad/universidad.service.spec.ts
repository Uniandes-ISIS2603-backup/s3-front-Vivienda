import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../routing-module/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { UniversidadListComponent } from './universidad-list.component';
import {UniversidadService} from '../universidad.service';
import { Universidad } from '../universidad';

describe('UniversidadListComponent', () => {
    let component: UniversidadListComponent;
    let fixture: ComponentFixture<UniversidadListComponent>;
    const universidades: Universidad[] = require('../../../assets/universidad.json');
    
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
