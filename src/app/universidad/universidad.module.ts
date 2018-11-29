import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UniversidadListComponent} from './universidad-list/universidad-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UniversidadService } from './universidad.service';
import { UniversidadCreateComponent } from './universidad-create/universidad-create.component';
import { UniversidadEditComponent } from './universidad-edit/universidad-edit.component';
import { UniversidadDetailComponent } from './universidad-detail/universidad-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPermissionsModule,
    FormsModule
  ],
  declarations: [UniversidadListComponent, UniversidadCreateComponent, UniversidadEditComponent, UniversidadDetailComponent],
  providers: [UniversidadService],
  exports:[UniversidadListComponent]
})
export class UniversidadModule { }
