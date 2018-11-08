import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UniversidadListComponent} from './universidad-list/universidad-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import { UniversidadService } from './universidad.service';
import { UniversidadCreateComponent } from './universidad-create/universidad-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [UniversidadListComponent, UniversidadCreateComponent],
  providers: [UniversidadService],
  exports:[UniversidadListComponent]
})
export class UniversidadModule { }
