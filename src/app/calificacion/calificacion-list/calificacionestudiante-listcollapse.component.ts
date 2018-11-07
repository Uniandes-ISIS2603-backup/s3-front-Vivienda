import {Component, OnInit, Input} from "@angular/core";
import { Calificacion } from '../calificacion';

@Component({
  selector: 'calificacion-estudiante-listcollapse',
  templateUrl: './calificacion-listcollapse.component.html'
})
export class CalificacionEstudianteListCollapseComponent implements OnInit{
    
    /**
     * List of calificacions to show
     */  
    @Input() calificaciones: Calificacion[];
    
    /**
     * Boolean attribute modeling the collapse button
     */
    public isCollapsed = true;
    
    /**
     * String referencing the type of table to show
     */
    listaDe: String = 'estudiante';

    /**
     * Initializes the component
     */
    ngOnInit() {
    }
}
