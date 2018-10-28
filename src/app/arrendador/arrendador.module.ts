import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArrendadorService} from "./arrendador.service";
import { ArrendadorListComponent } from './arrendador-list/arrendador-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ArrendadorService
  ],
  declarations: [ArrendadorListComponent],
})
export class ArrendadorModule { }
