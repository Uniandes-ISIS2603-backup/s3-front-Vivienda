import {Component, OnInit, Input} from "@angular/core";
import { Calificacion } from '../calificacion';

@Component({
  selector: 'calificacion-estudiante-listcollapse',
  templateUrl: './calificacion-listcollapse.component.html'
})
export class CalificacionEstudianteListCollapseComponent implements OnInit{    
    @Input() calificaciones: Calificacion[];
    public isCollapsed = true;

    ngOnInit() {
    }
}
