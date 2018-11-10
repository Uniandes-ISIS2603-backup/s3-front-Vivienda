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
    
    /**
     * Constructor for the component
     * @param calificacionService The reviews' service provider
     * @param route The route
     */
    constructor (private calificacionService:CalificacionService,
                 private route: ActivatedRoute){}
        
    /**
     * The review that the user chose to edit
     */
    calificacionPorEditar : Calificacion;

    /**
     * Id number of the strudent
     */
    estudiante_id : number;
    
    /**
     * String refencing the type of table to show
     */
    listaDe: String = 'estudiante';
    
    /**
     * List of reviews of the student
     */
    calificaciones: Calificacion[];

    /**
     * Retrieves all the reviews made by the student
     */
    getCalificaciones(): void {
        this.calificacionService.getCalificacionesEstudiante(this.estudiante_id).subscribe(calificaciones => this.calificaciones = calificaciones);
    }

    /**
     * Initializes the component
     */
    ngOnInit() {
        this.calificacionPorEditar = null;
        this.estudiante_id = +this.route.snapshot.paramMap.get('id');
        this.getCalificaciones();
    }
}
