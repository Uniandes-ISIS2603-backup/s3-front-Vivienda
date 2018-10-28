import {Component, OnInit, Input} from "@angular/core";
import { Calificacion } from '../calificacion';

@Component({
  selector: 'calificacion-vivienda-listcollapse',
  templateUrl: './calificacion-listcollapse.component.html'
})
export class CalificacionViviendaListCollapseComponent implements OnInit{    
    @Input() calificaciones: Calificacion[];
    public isCollapsed = true;
    listaDe: String = 'vivienda';

    ngOnInit() {
    }
}
