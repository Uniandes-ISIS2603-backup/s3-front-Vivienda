import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CalificacionListComponent} from "./calificacion-list/calificacion-list.component";
import {CalificacionService} from "./calificacion.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CalificacionListComponent
  ],
  providers: [
    CalificacionService
  ],
  exports: [
    CalificacionListComponent
  ]
})

  export class CalificacionModule {

  }
