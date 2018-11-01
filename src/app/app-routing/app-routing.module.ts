import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ViviendaListComponent} from '../vivienda/vivienda-list/vivienda-list.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {EstudianteListComponent} from '../estudiante/estudiante-list/estudiante-list.component';
import {EstudianteDetailComponent} from '../estudiante/estudiante-detail/estudiante-detail.component';
import {EstudianteCreateComponent} from '../estudiante/estudiante-create/estudiante-create.component';
import {CalificacionEstudianteListComponent} from '../calificacion/calificacion-list/calificacionestudiante-list.component';
import {CalificacionViviendaListComponent} from '../calificacion/calificacion-list/calificacionvivienda-list.component';
import {CalificacionDetailComponent} from '../calificacion/calificacion-detail/calificacion-detail.component';
import {ContratoListComponent} from '../contrato/contrato-list/contrato-list.component';
import {ViviendaDetailComponent} from '../vivienda/vivienda-detail/vivienda-detail.component';
import { ArrendadorListComponent } from '../arrendador/arrendador-list/arrendador-list.component';

const routes: Routes = [

  {
    path: 'viviendas',
    children: [
      {
        path: 'list',
        component: ViviendaListComponent
      },
      {
          path: ':id',
          component: ViviendaDetailComponent
      }
    ]
  },
  {
    path: 'estudiante',
    children: [
      {
        path: 'list',
        component: EstudianteListComponent
      },
      {
        path: 'create',
        component: EstudianteCreateComponent
      },
      {
        path: ':id',
        component: EstudianteDetailComponent
      }
    ]
  },
  {
    path: 'calificacion',
    children: [
      {
        path: 'listestudiante/:id',
        component: CalificacionEstudianteListComponent
      },
      {
        path: 'listvivienda/:id',
        component: CalificacionViviendaListComponent
      },
      {
        path: ':id',
        component: CalificacionDetailComponent
      }
    ]
  },
  {
    path: 'contrato',
    children: [
      {
        path: 'list',
        component: ContratoListComponent
      }
    ]
  },
  {
    path: 'arrendador',
    children: [
      {
        path: 'list',
        component: ArrendadorListComponent
      }
    ]
  },
  {
    path: 'ingresar',
    children: [
      {
        path: 'signIn',
        component: SignInComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
