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
import {Arrendador} from '../../arrendador/arrendador';
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

  //El id del estudiante asociad
  estudianteId: number;

  //El id del cuarto asociado al contrato
  cuartoId: number;

  //El costo de arrendamiento incluye el costo de los servicios adicionales
  costo:number;

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
        if (this.verificarFecha()){
            this.contrato.metodoPago = this.metodosPago.indexOf(this.metodoPago) + 1;
            this.contratoService.createContrato(this.contrato).subscribe(() => {
              this.toastrService.success('Se creo el contrato');
              this.router.navigate(['viviendas/' + this.viviendaId]);
            }, error1 => {
              this.toastrService.error('Error al crear contrato');
            });
        }
    }
    
    verificarFecha():boolean{
        //let currDate: Date = new Date();
        let fechaInicio: Date = new Date(this.contrato.fechaInicio);
        let fechaFin: Date = new Date(this.contrato.fechaFin);
        let error: string = '';
        
        if (fechaFin <= fechaInicio)
            error += 'La fecha de inicio debe ser antes de la fecha de terminación. ';
        //if (currDate > fechaInicio)
        //    error += 'La fecha actual debe ser antes de la fecha de inicio.';
       
        if (error.length != 0)
            this.toastrService.error(error, 'Error');
        return (error.length == 0)
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
      this.contrato.vivienda = viviendaDetail;
      this.contrato.arrendador = viviendaDetail.arrendador;
      viviendaDetail.cuartos.forEach((cuarto)=>{
        if (cuarto.id == this.cuartoId) {
          this.contrato.cuarto = cuarto;
        }
      });
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

  getEstudiante() {
    this.estudianteService.getEstudiante(this.estudianteId).subscribe(estudiante => {
        if (estudiante.contrato){
            this.toastrService.error('Ya tienes un contrato vigente');
            this.cancelCreation();
        }
      this.contrato.estudiante = estudiante;
    });
  }
  /**
   * Se invoca cuando se inicia el proyecto con angular
   */
  ngOnInit() {
    this.contrato = new ContratoDetail();
    this.contrato.estudiante = new Estudiante();
    this.contrato.vivienda = new Vivienda();
    this.contrato.cuarto = new Cuarto();
    this.contrato.arrendador = new Arrendador();
    this.viviendaId = +this.route.snapshot.paramMap.get('viviendaID');
    this.estudianteId = +this.route.snapshot.paramMap.get('estudianteID');
    this.cuartoId = +this.route.snapshot.paramMap.get('cuartoID');
    this.getViviendaYCuarto();
    this.getEstudiante();
    this.metodosPago = ['Tarjeta de credito', 'Efectivo'];
  }
  
  

}
