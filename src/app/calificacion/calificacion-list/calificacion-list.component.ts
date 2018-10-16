import {Component, OnInit} from "@angular/core";
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'calificacion-list',
  templateUrl: './calificacion-list.component.html'
})
export class CalificacionListComponent implements OnInit{
    constructor (private calificacionService:CalificacionService){}

    calificaciones: Calificacion[];

    getCalificaciones(): void {
        this.calificacionService.getCalificaciones().subscribe(pp => this.calificaciones = pp);
    }

    ngOnInit() {
        this.getCalificaciones();
    }
}
