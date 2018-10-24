import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ViviendaListComponent} from '../vivienda/vivienda-list/vivienda-list.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {SitioInteresListComponent} from '../sitioInteres/sitioInteres-list/sitioInteres-list.component';

const routes: Routes = [

    {
        path: 'viviendas',
        children: [
            {
                path: 'list',
                component: ViviendaListComponent
            }
        ]
    },
    {
        path: 'sitiosInteres',
        children: [
            {
                path: 'list',
                component: SitioInteresListComponent
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
