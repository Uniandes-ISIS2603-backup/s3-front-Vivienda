import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SitioInteresService } from './sitioInteres.service';
import { SitioInteresListComponent } from '../sitio-interes/sitio-interes-list/sitio-interes-list.component';
import { SitioInteresCreateComponent } from './sitio-interes-create/sitio-interes-create.component';
import { SitioInteresUpdateComponent } from './sitio-interes-update/sitio-interes-update.component';

@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
  ],
  declarations: [
    SitioInteresListComponent,
    SitioInteresCreateComponent,
    SitioInteresUpdateComponent],
    providers: [SitioInteresService]
})
export class SitioInteresModule { }
