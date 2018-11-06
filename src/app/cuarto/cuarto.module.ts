import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuartoListComponent } from './cuarto-list/cuarto-list.component';
import {CuartoService} from "./cuarto.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CuartoListComponent],
  providers: [CuartoService]
})
export class CuartoModule { }
