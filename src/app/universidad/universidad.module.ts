import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversidadListComponent } from './universidad-list/universidad-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UniversidadListComponent],
  exports:[UniversidadListComponent]
})
export class UniversidadModule { }
