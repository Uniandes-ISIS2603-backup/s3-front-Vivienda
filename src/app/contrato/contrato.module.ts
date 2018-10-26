import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContratoListComponent} from './contrato-list/contrato-list.component';
import {ContratoService} from './contrato.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [CommonModule, BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule],
  declarations: [ContratoListComponent],
  providers: [ContratoService],
  exports: [ContratoListComponent]
})
export class ContratoModule {
}
