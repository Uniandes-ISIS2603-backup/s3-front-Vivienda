import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CalificacionModule} from '../calificacion/calificacion.module';
import {ViviendaListComponent} from './vivienda-list/vivienda-list.component';
import {ViviendaService} from './vivienda.service';
import {ViviendaDetailComponent} from './vivienda-detail/vivienda-detail.component';
import {ViviendaSitiosInteresComponent} from './vivienda-sitios-interes/vivienda-sitios-interes.component';
import {ViviendaCreateComponent} from './vivienda-create/vivienda-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    CalificacionModule
  ],
  declarations: [
    ViviendaListComponent,
    ViviendaDetailComponent,
    ViviendaSitiosInteresComponent,
    ViviendaCreateComponent
  ],
  providers: [
    ViviendaService
  ]
})

export class ViviendaModule {

}
