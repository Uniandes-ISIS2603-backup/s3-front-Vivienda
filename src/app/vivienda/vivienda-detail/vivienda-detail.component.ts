import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ViviendaService} from '../vivienda.service';
import {ViviendaDetail} from '../vivienda-detail';
import {SitioInteres} from '../../sitio-interes/sitioInteres';

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
  
  puedeEditar: boolean;

  getViviendaDetail(): void {
    this.viviendaService.getViviendaDetail(this.vivienda_id)
      .subscribe(viviendaDetail => {
        this.viviendaDetail = viviendaDetail;
        this.puedeEditar = (localStorage.getItem('role') == 'ADMIN' || 
                    (localStorage.getItem('role') == 'ARRENDADOR' &&
                    Number(localStorage.getItem('id')) == this.viviendaDetail.arrendador.id));
      });
  }

  darCalificacion(): string {
      return this.viviendaService.promediarCalificaciones(this.viviendaDetail);
  }

  ngOnInit() {
    this.vivienda_id = +this.route.snapshot.paramMap.get('id');
    this.viviendaDetail = new ViviendaDetail();
    this.getViviendaDetail();
  }

}
