import {Component, OnInit, Input} from "@angular/core";
import { Calificacion } from '../calificacion';
import {CalificacionListCollapseComponent} from './calificaciones-listcollapse';

@Component({
  selector: 'calificacion-vivienda-listcollapse',
  templateUrl: './calificacion-listcollapse.component.html',
  styleUrls: ['./calificacion-listcollapse.component.css']
})
export class CalificacionViviendaListCollapseComponent extends CalificacionListCollapseComponent implements OnInit{
    
    /**
     * String referencing the type of table to show
     */
    listaDe: String = 'vivienda';
    
    fNombre: string;
    fLogin: string;
    
    nombSort: string = "";
    logiSort: string = "";


    filtrar(): void{
        this.calificacionesFiltradas = this.calificaciones.filter( cal =>{
            return (!this.fNombre || super.compararString(cal.estudiante.nombre, this.fNombre)) &&
                (!this.fLogin || super.compararString(cal.estudiante.login, this.fLogin)) &&
                (! this.fPuntajeMin || cal.puntaje >= this.fPuntajeMin) &&
                (! this.fPuntajeMax || cal.puntaje <= this.fPuntajeMax);
        });
    }
    
    compNombre (a: Calificacion, b: Calificacion):number{
        if (a.estudiante.nombre == b.estudiante.nombre)
            return 0;
        else
            return (a.estudiante.nombre < b.estudiante.nombre)? -1:1;
    }
    
    nombreSort(){
        if (this.nombSort != "")
            this.calificacionesFiltradas.reverse();
        else
            this.calificacionesFiltradas.sort(this.compNombre);
        this.nombSort = (this.nombSort == "(asc)")? "(des)":"(asc)";
        this.puntSort = "";
        this.logiSort = "";
    }
    
    compLogin (a: Calificacion, b: Calificacion):number{
        if (a.estudiante.login == b.estudiante.login)
            return 0;
        else
            return (a.estudiante.login < b.estudiante.login)? -1:1;
    }
    
    loginSort(){
        if(this.logiSort != "")
            this.calificacionesFiltradas.reverse();
        else
            this.calificacionesFiltradas.sort(this.compLogin);
        this.logiSort = (this.logiSort == "(asc)")? "(des)":"(asc)";
        this.puntSort = "";
        this.nombSort = "";
    }
    
    puntajeSort(){
        super.puntajeSort();
        this.nombSort = "";
        this.logiSort = "";
    }

    /**
     * Initializes the component
     */
    ngOnInit() {
        this.calificacionesFiltradas = this.calificaciones;
        this.nombreSort();
    }
}
