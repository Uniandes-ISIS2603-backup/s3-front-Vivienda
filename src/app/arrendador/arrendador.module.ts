import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ArrendadorService} from "./arrendador.service";
import { ArrendadorListComponent } from './arrendador-list/arrendador-list.component';
import { ArrendadorDetailComponent } from './arrendador-detail/arrendador-detail.component';
import { ArrendadorCreateComponent } from './arrendador-create/arrendador-create.component';
import { ArrendadorUpdateComponent } from './arrendador-update/arrendador-update.component';

@NgModule({
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
  ],
  providers: [ ArrendadorService ],
  declarations: [ArrendadorListComponent, ArrendadorDetailComponent, ArrendadorCreateComponent, ArrendadorUpdateComponent],
  exports: [ArrendadorListComponent, ArrendadorDetailComponent, ArrendadorCreateComponent]
})
export class ArrendadorModule { }
