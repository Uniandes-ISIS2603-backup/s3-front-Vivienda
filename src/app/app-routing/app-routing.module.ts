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
import { ArrendadorDetailComponent } from '../arrendador/arrendador-detail/arrendador-detail.component';
import { LogInComponent } from '../log-in/log-in.component';
import {RegistrarseComponent} from '../shared/registrarse/registrarse.component'
import { ArrendadorCreateComponent } from '../arrendador/arrendador-create/arrendador-create.component';
import {ViviendaCreateComponent} from "../vivienda/vivienda-create/vivienda-create.component";
import {UniversidadListComponent} from '../universidad/universidad-list/universidad-list.component';

const routes: Routes = [

  {
    path: 'viviendas',
    children: [
      {
        path: 'list',
        component: ViviendaListComponent
      },
      {
        path:'create',
        component: ViviendaCreateComponent
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
    path: 'universidades',
    children: [
      {
        path: 'list',
        component: UniversidadListComponent
      }
    ]
  },
  {
    path: 'arrendadores',
    children: [
      {
        path: 'list',
        component: ArrendadorListComponent
      },
      {
          path: 'create',
          component: ArrendadorCreateComponent
      },
      {
          path: ':id',
          component: ArrendadorDetailComponent
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
  },
  {
    path: 'registrarse',
    children: [
      {
        path: 'logIn',
        component: RegistrarseComponent
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
