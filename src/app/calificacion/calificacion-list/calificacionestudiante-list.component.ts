import {Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router'
import { Calificacion } from '../calificacion';
import {Estudiante} from '../../estudiante/estudiante'
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'calificacion-list',
  templateUrl: './calificacion-list.component.html'
})
export class CalificacionEstudianteListComponent implements OnInit{
    constructor (private calificacionService:CalificacionService,
                 private route: ActivatedRoute){}
                 
    estudiante_id : number;
    estudiante : Estudiante;
    calificaciones: Calificacion[];


    getCalificaciones(): void {
        this.calificacionService.getCalificacionesEstudiante(this.estudiante_id).subscribe(calificaciones => this.calificaciones = calificaciones);
    }

    ngOnInit() {
        this.estudiante_id = +this.route.snapshot.paramMap.get('id');
        this.getCalificaciones();
    }
}
