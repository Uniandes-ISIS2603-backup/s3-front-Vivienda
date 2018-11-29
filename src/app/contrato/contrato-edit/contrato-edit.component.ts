import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContratoService} from '../contrato.service';
import {ViviendaService} from '../../vivienda/vivienda.service';
import {CuartoService} from '../../cuarto/cuarto.service';
import {Estudiante} from '../../estudiante/estudiante';
import {EstudianteService} from '../../estudiante/estudiante.service';
import {ArrendadorService} from '../../arrendador/arrendador.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ContratoDetail} from '../contrato-detail';

@Component({
  selector: 'app-contrato-edit',
  templateUrl: './contrato-edit.component.html',
  styleUrls: ['./contrato-edit.component.css']
})
export class ContratoEditComponent implements OnInit {

  idContrato: number;

  contrato: ContratoDetail;
  metodosPago: string[];
  metodoPago: string;

  /**
   * Constructor de la clase contrato edit
   * @param contratoService el servicio de contratos
   * @param viviendaService el servicio de viviendas
   * @param cuartoService el servicio de cuartos
   * @param estudianteService el servicio de estudiantes
   * @param arrendadorService el servicio de arrendores
   * @param route la ruta activada
   * @param router el router
   * @param toastrService el servicio de toastr
   */
  constructor(private contratoService: ContratoService,
              private viviendaService: ViviendaService,
              private cuartoService: CuartoService,
              private estudianteService: EstudianteService,
              private arrendadorService: ArrendadorService,
              private route: ActivatedRoute,
              private router: Router,
              private toastrService: ToastrService) { }

  getContrato(idContrato: number) {
    this.contratoService.getContratoDetail(idContrato).subscribe(contrato=>{
      this.contrato = contrato;
        this.viviendaService.getViviendaDetail(contrato.vivienda.id).subscribe(viv=>{
              this.contrato.vivienda = viv;
            });
    })
  }
  

  guardarCambios() {
    this.contratoService.editarContrato(this.contrato).subscribe(() => {
      this.toastrService.success('Se guardaron los cambios');
      this.router.navigate(['viviendas/' + this.contrato.vivienda.id]);
    }, error1 => {
      this.toastrService.error(error1.toString());
    })
  }

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  cancelCreation() {
    this.cancel.emit();
    this.router.navigate(['contratos/list']);
  }

  eliminarContrato() {
    this.contratoService.eliminarContrato(this.idContrato).subscribe(() => {
      this.toastrService.success('Se elimino el contrato');
      this.router.navigate(['viviendas/'+this.contrato.vivienda.id])
    }, error1 => {
      this.toastrService.error('No se elimino el contrato');
    });
  }
  
  calcularCosto():string{
      let costo: number = this.contrato.cuarto.costoArriendo;
      if (this.contrato.serviciosAdicionales)
            this.contrato.serviciosAdicionales.forEach(servicio=>{
                costo  += servicio.costo;
            });
      return "$"+costo;
  }


  ngOnInit() {
    this.contrato = new ContratoDetail();
    this.contrato.estudiante  = new Estudiante();
    this.idContrato = +this.route.snapshot.paramMap.get('id');
    this.getContrato(this.idContrato);
    this.metodosPago = ['Tarjeta de credito', 'Efectivo'];

  }
}
