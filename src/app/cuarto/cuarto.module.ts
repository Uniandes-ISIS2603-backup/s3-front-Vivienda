import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CuartoListComponent} from './cuarto-list/cuarto-list.component';
import {CuartoService} from './cuarto.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  declarations: [CuartoListComponent],
  providers: [CuartoService],
  exports: [CuartoListComponent]

})
export class CuartoModule {
}
