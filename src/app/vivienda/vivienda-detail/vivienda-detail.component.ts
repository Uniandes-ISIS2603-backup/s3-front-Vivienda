import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ViviendaService} from '../vivienda.service';
import {ViviendaDetail} from '../vivienda-detail';
import {SitioInteres} from '../sitioInteres';

@Component({
  selector: 'app-vivienda-detail',
  templateUrl: './vivienda-detail.component.html',
  styleUrls: ['./vivienda-detail.component.css']
})
export class ViviendaDetailComponent implements OnInit {

  constructor(
    private viviendaService: ViviendaService,
    private route: ActivatedRoute
  ) {
  }

  viviendaDetail: ViviendaDetail;

  vivienda_id: number;

  getViviendaDetail(): void {
    this.viviendaService.getViviendaDetail(this.vivienda_id)
      .subscribe(viviendaDetail => {
        this.viviendaDetail = viviendaDetail;
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
    this.vivienda_id = +this.route.snapshot.paramMap.get('id');
    this.viviendaDetail = new ViviendaDetail();
    this.getViviendaDetail();
  }

}
