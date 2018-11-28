import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cuarto} from '../../cuarto/cuarto';
import {ToastrService} from 'ngx-toastr';
import {ContratoService} from '../contrato.service';
import {Contrato} from '../contrato';
import {Vivienda} from '../../vivienda/vivienda';
import {ActivatedRoute, Router} from '@angular/router';
import {UniversidadService} from '../../universidad/universidad.service';
import {ViviendaService} from '../../vivienda/vivienda.service';
import {EstudianteService} from '../../estudiante/estudiante.service';
import {Universidad} from '../../universidad/universidad';
import {Estudiante} from '../../estudiante/estudiante';
import {forEach} from '../../../../node_modules/@angular/router/src/utils/collection';
import {ViviendaDetail} from '../../vivienda/vivienda-detail';
import {ContratoDetail} from '../contrato-detail';


@Component({
  selector: 'app-contrato-create',
  templateUrl: './contrato-create.component.html',
  styleUrls: ['./contrato-create.component.css']
})
export class ContratoCreateComponent implements OnInit {

  /**
   * Contrato que se va a crear
   */
  contrato: ContratoDetail;

  //El id de la vivienda relacionada al contrato
  viviendaId: number;

  //La vivienda relacionada al contrato
  vivienda: ViviendaDetail;

  //El id del estudiante asociad
  estudianteId: number;

  //El estudiante asociado al contrato
  estudiante: Estudiante;

  //El id del cuarto asociado al contrato
  cuartoId: number;

  //El cuarto asociado al contrato
  cuarto: Cuarto;

  //El costo de arrendamiento incluye el costo de los servicios adicionales
  costo:Number;

  metodoPago: string;

  metodosPago: string[];

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  /**
   * Constructor de la clase
   * @param contratoService - Servicio del contrato que se asocia
   * @param toastrService - Servicio de Toastr que se usa para revisar la logica del forum
   */
  constructor(private contratoService: ContratoService,
              private toastrService: ToastrService,
              private viviendaService: ViviendaService,
              private estudianteService: EstudianteService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  /**
   * Metodo donde se crea un contrato y se hace submit
   */
  crearContrato() {
    this.contratoService.createContrato(this.contrato).subscribe(() => {
      this.toastrService.success('Se creo el contrato');
      this.router.navigate(['viviendas/' + this.viviendaId]);
    }, error1 => {
      this.toastrService.error('Error al crear contrato');
    });
  }



  /**
   * Cancela una creacion de un contrato
   */
  cancelCreation() {
    this.cancel.emit();
    this.router.navigate(['contratos/list']);
  }

  getViviendaYCuarto() {
    this.viviendaService.getViviendaDetail(this.viviendaId).subscribe(viviendaDetail => {
      this.vivienda = viviendaDetail;
      this.contrato.arrendador = this.vivienda.arrendador;
      this.vivienda.cuartos.forEach((cuarto)=>{
        if (cuarto.id == this.cuartoId) {
          this.cuarto = cuarto;
          this.costo = cuarto.costoArriendo;
        }
      });
    });
  }

  getEstudiante() {
    this.estudianteService.getEstudiante(this.estudianteId).subscribe(estudiante => {
      this.estudiante = estudiante;
    });
  }
  /**
   * Se invoca cuando se inicia el proyecto con angular
   */
  ngOnInit() {
    this.contrato = new ContratoDetail();
    this.viviendaId = +this.route.snapshot.paramMap.get('viviendaID');
    this.estudianteId = +this.route.snapshot.paramMap.get('estudianteID');
    this.cuartoId = +this.route.snapshot.paramMap.get('cuartoID');
    this.getViviendaYCuarto();
    this.getEstudiante();
    this.metodosPago = ['Tarjeta de credito', 'Efectivo']
  }

}
