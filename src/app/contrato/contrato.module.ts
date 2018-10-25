import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContratoListComponent} from './contrato-list/contrato-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContratoListComponent],
  exports: [ContratoListComponent]
})
export class ContratoModule {
}
