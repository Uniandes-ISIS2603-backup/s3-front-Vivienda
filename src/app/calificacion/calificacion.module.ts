import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {CalificacionEstudianteListComponent} from "./calificacion-list/calificacionestudiante-list.component";
import {CalificacionEstudianteListCollapseComponent} from "./calificacion-list/calificacionestudiante-listcollapse.component";
import {CalificacionViviendaListComponent} from "./calificacion-list/calificacionvivienda-list.component";
import {CalificacionService} from "./calificacion.service";
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    CalificacionEstudianteListComponent,
    CalificacionEstudianteListCollapseComponent,
    CalificacionViviendaListComponent,
    CalificacionDetailComponent
  ],
  providers: [
    CalificacionService
  ],
  exports: [
    CalificacionEstudianteListComponent,
    CalificacionEstudianteListCollapseComponent,
    CalificacionViviendaListComponent,
    CalificacionDetailComponent
  ]
})

  export class CalificacionModule {

  }
