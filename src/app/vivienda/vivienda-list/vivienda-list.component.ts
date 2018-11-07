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
  constructor(private viviendaService: ViviendaService, private route: ActivatedRoute) {
  }

  viviendas: Vivienda[];


  //Obtiene el json de viviendas y se lo asigna a la lista de viviendas
  getViviendas(): void {
    this.viviendaService.getViviendas().subscribe(viviendas => {
      this.viviendas = viviendas;
      console.log(this.viviendas);
    });
  }

  darCalificacion(viviendaId): number {
    // let calificacion = 0;
    // this.viviendaService.getCalificaciones(viviendaId).subscribe(calificaciones => {
    //   let suma = 0;
    //   let n = 0;
    //   for (let calificacion of calificaciones){
    //     suma += calificacion.puntaje;
    //     n++;
    //   }
    //   calificacion = suma/n;
    // });
    // return calificacion;
    return 8.4;
  }

  ngOnInit() {
    this.getViviendas();
  }

}
