import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContratoListComponent} from './contrato-list/contrato-list.component';
import {ContratoService} from './contrato.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import {ContratoDetailComponent} from './contrato-detail/contrato-detail.component';
import {ContratoCreateComponent} from './contrato-create/contrato-create.component';
import {ContratoEditComponent} from './contrato-edit/contrato-edit.component';

@NgModule({
  imports: [CommonModule, BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule],
  declarations: [ContratoListComponent,
    ContratoDetailComponent,
    ContratoCreateComponent,
    ContratoEditComponent],
  providers: [ContratoService],
  exports: [ContratoListComponent]
})
export class ContratoModule {
}
