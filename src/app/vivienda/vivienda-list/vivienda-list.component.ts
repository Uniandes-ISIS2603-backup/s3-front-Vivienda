import {Component, OnInit} from '@angular/core';
import {ViviendaService} from '../vivienda.service';
import {Vivienda} from '../vivienda';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'vivienda-list',
  templateUrl: './vivienda-list.component.html',
  styleUrls: ['./vivienda-list.component.css']
})
export class ViviendaListComponent implements OnInit {
    constructor(private viviendaService: ViviendaService, private route: ActivatedRoute) {}

    mapeoCalificaciones = {};
    viviendas: Vivienda[];


    //Obtiene el json de viviendas y se lo asigna a la lista de viviendas
    getViviendas(): void {
      this.viviendaService.getViviendas().subscribe(viviendas => {
        this.viviendas = viviendas;
        this.mapeoCalificaciones = this.viviendaService.mapearCalificaciones(this.viviendas);
        console.log(this.viviendas);
      });
    }

    ngOnInit() {
      this.getViviendas();
    }

}
