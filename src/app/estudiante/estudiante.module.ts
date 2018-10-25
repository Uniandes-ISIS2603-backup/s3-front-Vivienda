import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CalificacionModule } from '../calificacion/calificacion.module';
import { HttpClientModule } from '@angular/common/http';
import {EstudianteListComponent} from './estudiante-list/estudiante-list.component';
import {EstudianteService} from "./estudiante.service";
import { EstudianteDetailComponent } from './estudiante-detail/estudiante-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    CalificacionModule
  ],
  declarations: [
    EstudianteListComponent,
    EstudianteDetailComponent
  ],
  providers: [
    EstudianteService
  ],
  exports: [
    EstudianteListComponent,
    EstudianteDetailComponent
  ]
})

 export class EstudianteModule {
     
 }
