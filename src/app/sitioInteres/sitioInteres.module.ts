import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SitioInteresListComponent} from "./sitioInteres-list/sitioInteres-list.component";
import {SitioInteresService} from "./sitioInteres.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SitioInteresListComponent
  ],
  providers: [
    SitioInteresService
  ],
  exports: [
    SitioInteresListComponent
  ]
})

  export class SitioInteresModule {

  }
