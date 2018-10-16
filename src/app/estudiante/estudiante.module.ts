import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EstudianteListComponent} from './estudiante-list/estudiante-list.component';
import {EstudianteService} from "./estudiante.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    EstudianteListComponent
  ],
  providers: [
    EstudianteService
  ],
  exports: [
    EstudianteListComponent
  ]
})

 export class EstudianteModule {
     
 }
