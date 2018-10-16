import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ViviendaListComponent} from "./vivienda-list/vivienda-list.component";
import {ViviendaService} from "./vivienda.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ViviendaListComponent
  ],
  providers: [
    ViviendaService
  ],
  exports: [
    ViviendaListComponent
  ]
})

  export class ViviendaModule {

  }
