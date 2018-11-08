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

  darCalificacion(): String {
      return this.viviendaService.promediarCalificaciones(this.viviendaDetail);
  }


  ngOnInit() {
    this.vivienda_id = +this.route.snapshot.paramMap.get('id');
    this.viviendaDetail = new ViviendaDetail();
    this.getViviendaDetail();
  }

}
