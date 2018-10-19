import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArrendadorService} from "./arrendador.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ArrendadorService
  ],
})
export class ArrendadorModule { }
