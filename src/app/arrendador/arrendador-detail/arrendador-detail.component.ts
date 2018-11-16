import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArrendadorService } from '../arrendador.service';
import { ArrendadorDetail } from '../arrendador-detail';

@Component({
  selector: 'app-arrendador-detail',
  templateUrl: './arrendador-detail.component.html',
  styleUrls: ['./arrendador-detail.component.css']
})
export class ArrendadorDetailComponent implements OnInit {

  constructor(
  private arrendadorService: ArrendadorService,
  private route: ActivatedRoute
  ) { }
    public isCollapsed = true;
  arrendadorDetail: ArrendadorDetail;
  
  arrendador_id: number;
  
  getArrendadorDetail(): void
  {
      this.arrendadorService.getArrendadorDetail(this.arrendador_id)
          .subscribe(arrendadorDetail => {
              this.arrendadorDetail = arrendadorDetail;
              console.log(this.arrendadorDetail);
      });
  }
  
    deleteArrendador(): void
  {
      this.arrendadorService.deleteArrendador(this.arrendador_id)
          .subscribe();
  }
  
  ngOnInit() {
      this.arrendador_id = +this.route.snapshot.paramMap.get('id');
      this.arrendadorDetail = new ArrendadorDetail();
      this.getArrendadorDetail();
  }

}
