import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioAdicionalListComponent } from './servicio-adicional-list/servicio-adicional-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { ServicioAdicionalService } from './servicio-adicional.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [ServicioAdicionalListComponent],
  providers: [ServicioAdicionalService],
  exports:[ServicioAdicionalListComponent]
})
export class ServicioAdicionalModule { }
