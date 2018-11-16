import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ViviendaService} from '../vivienda.service';
import {ViviendaDetail} from '../vivienda-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Cuarto} from '../../cuarto/cuarto';
import {forEach} from '../../../../node_modules/@angular/router/src/utils/collection';
import {CuartoService} from '../../cuarto/cuarto.service';

@Component({
  selector: 'app-vivienda-edit',
  templateUrl: './vivienda-edit.component.html',
  styleUrls: ['./vivienda-edit.component.css']
})
export class ViviendaEditComponent implements OnInit {

  vivienda: ViviendaDetail;
  cuartos: Cuarto[];
  viviendaId: number;
  serviciosIncluidosString: string;

  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor(private viviendaService: ViviendaService,
              private cuartoService: CuartoService,
              private route: ActivatedRoute,
              private router: Router,
              private toastrService: ToastrService) {
  }


  ngOnInit() {
    this.vivienda = new ViviendaDetail();
    this.serviciosIncluidosString = '';
    this.viviendaId = +this.route.snapshot.paramMap.get('id');
    this.getVivienda(this.viviendaId);
  }

  // Obtiene la vivienda con el id dado, la asigna a la variable vivienda y sus cuartos a la variable de cuartos
  getVivienda(id: number) {
    this.viviendaService.getViviendaDetail(id)
      .subscribe(viviendaDetail => {
        this.vivienda = viviendaDetail;
        this.cuartos = viviendaDetail.cuartos;
        let serviciosIncluidosList = viviendaDetail.serviciosIncluidos;
        for (let i = 0; i < serviciosIncluidosList.length; i++) {
          this.serviciosIncluidosString += serviciosIncluidosList[i];
          if (i < (serviciosIncluidosList.length - 1)) {
            this.serviciosIncluidosString += ", "
          }
        }
      });
  }

  procesarServiciosIncluidos() {
    if (!this.stringIsEmpty(this.serviciosIncluidosString)) {
      let serviciosList: string[] = this.serviciosIncluidosString.split(',');
      for (let i = 0; i < serviciosList.length; i++) {
        serviciosList[i] = serviciosList[i].trim();
      }
      this.vivienda.serviciosIncluidos = serviciosList;
    }
  }

  stringIsEmpty(str: string): boolean {
    if (!str || str.length === 0) {
      return true;
    }
    return false;
  }

  guardarCambios() {
    this.procesarServiciosIncluidos();
    this.viviendaService.updateVivienda(this.vivienda).subscribe(() => {
      this.update.emit();
      this.toastrService.success('Se guardaron los cambios de la vivienda');
    }, error => {
      this.toastrService.error(error, "Error")
    });
    this.cuartos.forEach((cuarto, index) => {
      this.cuartoService.updateCuarto(cuarto, this.viviendaId).subscribe(() => {
        this.update.emit();
        this.toastrService.success('Se guardaron los cambios del cuarto #' + index);
      }, error1 => {
        this.toastrService.error('Error en el cuarto #' + index + ': ' + error1);
      });
    });
  }

  cancelUpdate() {
    this.router.navigate(["viviendas/"+this.viviendaId])
  }


}


