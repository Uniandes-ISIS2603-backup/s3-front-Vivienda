import {Component, OnInit, Input} from '@angular/core';
import {Calificacion} from '../calificacion';
import {CalificacionListCollapseComponent} from './calificaciones-listcollapse';

@Component({
  selector: 'calificacion-estudiante-listcollapse',
  templateUrl: './calificacion-listcollapse.component.html',
  styleUrls: ['./calificacion-listcollapse.component.css']
})
export class CalificacionEstudianteListCollapseComponent extends CalificacionListCollapseComponent implements OnInit {
    
    fVivienda: string;
    
    viviSort: string = "(asc)";

    /**
     * String referencing the type of table to show
     */
    listaDe: String = 'estudiante';

    filtrar(): void{
        this.calificacionesFiltradas = this.calificaciones.filter( cal =>{
            return (!this.fVivienda || cal.vivienda.nombre.toLowerCase().startsWith(this.fVivienda.toLowerCase())) &&
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
        this.calificacionesFiltradas = (this.viviSort != "") ? this.calificacionesFiltradas.reverse():
                                        this.calificacionesFiltradas.sort(this.compVivienda);
        this.viviSort = (this.viviSort == "(asc)")? "(des)":"(asc)";
        this.puntSort = "";
    }
    
    puntajeSort(){
        super.puntajeSort();
        this.viviSort = "";
    }
    
    /**
     * Initializes the component
     */
    ngOnInit() {
        this.calificacionesFiltradas = this.calificaciones;
    }
}
