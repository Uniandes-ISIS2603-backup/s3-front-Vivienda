import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ViviendaModule} from "./vivienda/vivienda.module";
import {CalificacionModule} from "./calificacion/calificacion.module";
import {EstudianteModule} from "./estudiante/estudiante.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViviendaModule,
    EstudianteModule,
    CalificacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
