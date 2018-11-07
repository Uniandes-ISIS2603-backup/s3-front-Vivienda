import {Component, OnInit, Input} from "@angular/core";
import { Calificacion } from '../calificacion';

@Component({
  selector: 'calificacion-vivienda-listcollapse',
  templateUrl: './calificacion-listcollapse.component.html'
})
export class CalificacionViviendaListCollapseComponent implements OnInit{
    
    /**
     * The list of reviews to show
     */ 
    @Input() calificaciones: Calificacion[];
    
    /**
     * Boolean attribute modeling the collapse button
     */
    public isCollapsed = true;
    
    /**
     * String referencing the type of table to show
     */
    listaDe: String = 'vivienda';

    /**
     * Initializes the component
     */
    ngOnInit() {
    }
}
