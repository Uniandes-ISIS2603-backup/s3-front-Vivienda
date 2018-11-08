import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {ViviendaModule} from './vivienda/vivienda.module';
import {CalificacionModule} from './calificacion/calificacion.module';
import {EstudianteModule} from './estudiante/estudiante.module';
import {ArrendadorModule} from './arrendador/arrendador.module';
import {UniversidadModule} from './universidad/universidad.module';
import {RouterModule} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {ContratoModule} from './contrato/contrato.module';
import {LogInComponent} from './log-in/log-in.component';
import {SharedModule} from './shared/shared.module';
import {CuartoModule} from './cuarto/cuarto.module';
import {ServicioAdicionalModule} from './servicio-adicional/servicio-adicional.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ViviendaModule,
    EstudianteModule,
    CalificacionModule,
    SharedModule,
    ArrendadorModule,
    ContratoModule,
    UniversidadModule,
    CuartoModule,
    ServicioAdicionalModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class AppModule {
}
