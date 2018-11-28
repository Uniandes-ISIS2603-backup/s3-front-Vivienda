import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArrendadorService } from '../arrendador.service';
import {UserService} from '../../log-in/user.service';
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
  private authService: UserService,
  private toastrService : ToastrService
  ) { }
    public isCollapsed = true;
  arrendadorDetail: ArrendadorDetail;
  
  arrendador_id: number;
  
  puedeEditar: boolean;
  
  getArrendadorDetail(): void
  {
      this.arrendadorService.getArrendadorDetail(this.arrendador_id)
          .subscribe(arrendadorDetail => {
              this.arrendadorDetail = arrendadorDetail;
              console.log(this.arrendadorDetail);
      });
  }
  
    deleteArrendador(): void{
        this.arrendadorService.deleteArrendador(this.arrendador_id)
            .subscribe(() => {this.authService.logout();
                                this.toastrService.success("El arrendador se eliminó", "Eliminar Arrendador");});
    }
  
  ngOnInit() {
      this.arrendador_id = +this.route.snapshot.paramMap.get('id');
      this.arrendadorDetail = new ArrendadorDetail();
      this.getArrendadorDetail();
      this.puedeEditar = (localStorage.getItem('role') == 'ADMIN' || 
                    (localStorage.getItem('role') == 'ARRENDADOR' &&
                    Number(localStorage.getItem('id')) == this.arrendador_id));
  }

}
