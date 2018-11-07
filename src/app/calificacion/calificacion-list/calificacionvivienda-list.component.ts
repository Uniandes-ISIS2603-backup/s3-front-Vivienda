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
    
    /**
     * Constructor for the component
     * @param calificacionService The reviews' service provider
     * @param route The route
     */
    constructor (private calificacionService:CalificacionService,
                 private route: ActivatedRoute){}
    
    /**
     * Id number of the housing
     */   
    vivienda_id : number;
    
    /**
     * String refencing the type of table to show
     */
    listaDe: String = 'vivienda';
    
    /**
     * List of reviews of the housing
     */
    calificaciones: Calificacion[];

    /**
     * Retrieves all the reviews of the housing
     */
    getCalificaciones(): void {
        this.calificacionService.getCalificacionesVivienda(this.vivienda_id).subscribe(calificaciones => this.calificaciones = calificaciones);
    }

    /**
     * Initializaes the component
     */
    ngOnInit() {
        this.vivienda_id = +this.route.snapshot.paramMap.get('id');
        this.getCalificaciones();
    }
}
