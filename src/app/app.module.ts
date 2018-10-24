import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ViviendaModule} from "./vivienda/vivienda.module";
import {CalificacionModule} from "./calificacion/calificacion.module";
import {EstudianteModule} from "./estudiante/estudiante.module";
import {ArrendadorModule} from "./arrendador/arrendador.module";
import {SitioInteresModule} from "./sitioInteres/sitioInteres.module";
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ViviendaModule,
    EstudianteModule,
    CalificacionModule,
    ArrendadorModule,
    SitioInteresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
