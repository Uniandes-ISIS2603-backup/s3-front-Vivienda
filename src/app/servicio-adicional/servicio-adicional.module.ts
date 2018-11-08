import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioAdicionalListComponent } from './servicio-adicional-list/servicio-adicional-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import { ServicioAdicionalService } from './servicio-adicional.service';
import { ServicioAdicionalDetailComponent } from './servicio-adicional-detail/servicio-adicional-detail.component';
import { ServicioAdicionalCreateComponent } from './servicio-adicional-create/servicio-adicional-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ServicioAdicionalListComponent, ServicioAdicionalDetailComponent, ServicioAdicionalCreateComponent],
  providers: [ServicioAdicionalService],
  exports:[ServicioAdicionalListComponent]
})
export class ServicioAdicionalModule { }
