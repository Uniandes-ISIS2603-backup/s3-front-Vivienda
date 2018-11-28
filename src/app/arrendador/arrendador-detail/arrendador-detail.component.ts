import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router'

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
  private route: ActivatedRoute,
  private router: Router,
  private toastrService: ToastrService) { }

  public isCollapsed = true;
  arrendadorDetail: ArrendadorDetail;
  
  arrendador_id: number;
  
  getArrendadorDetail(): void
  {
      this.arrendadorService.getArrendadorDetail(this.arrendador_id)
          .subscribe(arrendadorDetail => {
              this.arrendadorDetail = arrendadorDetail;
      });
  }
  
    deleteArrendador(): void
  {
      this.arrendadorService.deleteArrendador(this.arrendador_id)
          .subscribe(()=>{
            this.toastrService.success("El arrendador fue eliminado", "Arrendador Delete");
            this.router.navigate(["/arrendadores/list"]);});
  }
  
  ngOnInit() {
      this.arrendador_id = +this.route.snapshot.paramMap.get('id');
      this.arrendadorDetail = new ArrendadorDetail();
      this.getArrendadorDetail();
  }

}
