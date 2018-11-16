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
import { ArrendadorEditComponent } from './arrendador-edit/arrendador-edit.component';

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
  declarations: [ArrendadorListComponent, ArrendadorDetailComponent, ArrendadorCreateComponent, ArrendadorEditComponent],
  exports: [ArrendadorListComponent, ArrendadorDetailComponent, ArrendadorCreateComponent]
})
export class ArrendadorModule { }
