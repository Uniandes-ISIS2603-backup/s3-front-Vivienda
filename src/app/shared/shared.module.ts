import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EstudianteModule} from '../estudiante/estudiante.module'
import {ArrendadorModule} from '../arrendador/arrendador.module'
import { RegistrarseComponent } from './registrarse/registrarse.component';

@NgModule({
  imports: [
    CommonModule,
    EstudianteModule,
    ArrendadorModule
  ],
  declarations: [RegistrarseComponent]
})
export class SharedModule { }
