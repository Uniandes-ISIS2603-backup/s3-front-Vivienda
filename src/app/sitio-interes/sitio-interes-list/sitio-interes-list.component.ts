import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ViviendaService} from '../../vivienda/vivienda.service';
import {SitioInteresService} from '../sitioInteres.service';
import {ViviendaDetail} from '../../vivienda/vivienda-detail';

@Component({
  selector: 'app-sitio-interes-list',
  templateUrl: './sitio-interes-list.component.html',
  styleUrls: ['./sitio-interes-list.component.css']
})
export class SitioInteresListComponent implements OnInit {

  constructor(private viviendaService: ViviendaService, private sitioInteresService: SitioInteresService, private route: ActivatedRoute) { }
  
  viviendaId: number;
  
  viviendaDetail: ViviendaDetail;

  getViviendaDetail(): void {
    this.viviendaService.getViviendaDetail(this.viviendaId)
      .subscribe(viviendaDetail => {
        this.viviendaDetail = viviendaDetail;
      });
  }
  
  deleteSitioInteres(sitioInteresId: number): void
  {
      this.sitioInteresService.deleteSitioInteres(this.viviendaId, sitioInteresId)
      .subscribe();
  }

  ngOnInit() {
      this.viviendaId = +this.route.snapshot.paramMap.get('id');
          this.viviendaDetail = new ViviendaDetail();
          this.getViviendaDetail();
  }

}
