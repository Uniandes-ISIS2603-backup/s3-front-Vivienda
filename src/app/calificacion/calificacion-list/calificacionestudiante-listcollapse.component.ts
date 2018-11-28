import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {Calificacion} from '../calificacion';
import {Router } from '@angular/router';
import {CalificacionListCollapseComponent} from './calificaciones-listcollapse';
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'calificacion-estudiante-listcollapse',
  templateUrl: './calificacion-listcollapse.component.html',
  styleUrls: ['./calificacion-listcollapse.component.css']
})
export class CalificacionEstudianteListCollapseComponent extends CalificacionListCollapseComponent implements OnInit {
    editable: boolean = false;
    
    calificacionPorEditar: Calificacion;
    
    fVivienda: string;
    
    viviSort: string = "";
    
    isCollapsed: boolean = false;
    
    @Output() update = new EventEmitter();
    @Input() puedeEditar: boolean;
    
    constructor (private calificacionService:CalificacionService,
                    private router: Router){super()}
    
    /**
     * String referencing the type of table to show
     */
    listaDe: string = 'estudiante';

    filtrar(): void{
        this.calificacionesFiltradas = this.calificaciones.filter( cal =>{
            return (!this.fVivienda || super.compararString(cal.vivienda.nombre, this.fVivienda)) &&
                (! this.fPuntajeMin || cal.puntaje >= this.fPuntajeMin) &&
                (! this.fPuntajeMax || cal.puntaje <= this.fPuntajeMax);
        });
    }
    
    compVivienda (a: Calificacion, b: Calificacion):number{
        if (a.vivienda.nombre == b.vivienda.nombre)
            return 0;
        else
            return (a.vivienda.nombre < b.vivienda.nombre)? -1:1;
    }
    
    viviendaSort(){
        if (this.viviSort != "")
            this.calificacionesFiltradas.reverse();
        else
            this.calificacionesFiltradas.sort(this.compVivienda);
        this.viviSort = (this.viviSort == "(asc)")? "(des)":"(asc)";
        this.puntSort = "";
    }
    
    puntajeSort(){
        super.puntajeSort();
        this.viviSort = "";
    }
    
    /**
     * Retrieves all the reviews made by the student
     */
    actualizarCalificaciones():void{
        this.update.emit();
        this.calificacionService.getCalificacionesEstudiante(this.calificaciones[0].estudiante.id).subscribe(ss =>{
            this.calificaciones = ss;
            this.filtrar();
            this.viviSort = "";
            this.viviendaSort();
        });
    }
    
    clickRow(calificacion: Calificacion):void{
        if (this.editable)
            this.calificacionPorEditar = super.copyCalificacion(calificacion);
        else
            this.router.navigate(["/viviendas/" + calificacion.vivienda.id]);
    }
    
    /**
     * Initializes the component
     */
    ngOnInit() {
        this.calificacionesFiltradas = this.calificaciones;
        this.viviendaSort();
    }
}
