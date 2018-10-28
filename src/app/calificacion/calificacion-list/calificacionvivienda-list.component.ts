import {Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router'
import { Calificacion } from '../calificacion';
import {Vivienda} from '../../vivienda/vivienda'
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'calificacion-list',
  templateUrl: './calificacion-list.component.html'
})
export class CalificacionViviendaListComponent implements OnInit{
    constructor (private calificacionService:CalificacionService,
                 private route: ActivatedRoute){}
                 
    vivienda_id : number;
    listaDe: String = 'vivienda';
    calificaciones: Calificacion[];


    getCalificaciones(): void {
        this.calificacionService.getCalificacionesVivienda(this.vivienda_id).subscribe(calificaciones => this.calificaciones = calificaciones);
    }

    ngOnInit() {
        this.vivienda_id = +this.route.snapshot.paramMap.get('id');
        this.getCalificaciones();
    }
}
