import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ViviendaService} from '../vivienda.service';
import {ViviendaDetail} from '../vivienda-detail';
import {SitioInteres} from '../../sitio-interes/sitioInteres';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-vivienda-detail',
  templateUrl: './vivienda-detail.component.html',
  styleUrls: ['./vivienda-detail.component.css']
})
export class ViviendaDetailComponent implements OnInit {

  constructor(
    private viviendaService: ViviendaService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {
  }

  viviendaDetail: ViviendaDetail;

  vivienda_id: number;
  
  puedeEditar: boolean;

  mostrarContratos : boolean;

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
    this.mostrarContratos = false;
  }

  //Funcion que se llama cuando se intenta eliminar la vivienda
  eliminarVivienda() {
    var confirmar = confirm('Esta seguro que desea eliminar la vivienda?');
    if (confirmar == true) {
      this.viviendaService.eliminarVivienda(this.vivienda_id)
        .subscribe(() => {
          this.toastrService.success('Se elimino la vivienda exitosamente');
          this.router.navigate(['/viviendas/list6']);
        }, error1 => {
          this.toastrService.error('Error: No se elimino la vivienda');
        });
    }
  }

  arrendarCuarto(cuartoId: number) {
    let estudianteId = +localStorage.getItem('id');
    this.router.navigate(['contratos/create/estudiante/' + estudianteId.toString() + '/vivienda/' + this.vivienda_id.toString() + '/cuarto/' + cuartoId.toString()]);
  }

  toggleContratos() {
    this.mostrarContratos = !this.mostrarContratos;
  }
}
