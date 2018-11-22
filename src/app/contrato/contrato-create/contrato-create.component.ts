import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cuarto} from '../../cuarto/cuarto';
import {ToastrService} from 'ngx-toastr';
import {ContratoService} from '../contrato.service';
import {Contrato} from '../contrato';
import {Vivienda} from '../../vivienda/vivienda';
import {Router} from '@angular/router';
import {UniversidadService} from '../../universidad/universidad.service';
import {ViviendaService} from '../../vivienda/vivienda.service';
import {EstudianteService} from '../../estudiante/estudiante.service';
import {Universidad} from '../../universidad/universidad';
import {Estudiante} from '../../estudiante/estudiante';

@Component({
  selector: 'app-contrato-create',
  templateUrl: './contrato-create.component.html',
  styleUrls: ['./contrato-create.component.css']
})
export class ContratoCreateComponent implements OnInit {

  /**
   * Contrato que se va a crear
   */
  contrato: Contrato;

  /**
   * The new vivienda's id
   */
  viviendaId: number;

  /**
   * El id del estudiante asociado
   */
  estudianteId: number;

  /**
   * List of all the universities in UniVivienda
   */
  viviendas: Vivienda[];

  /**
   * List of all the universities in UniVivienda
   */
  estudiantes: Estudiante[];

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
              private router: Router) {
  }

  /**
   * Metodo donde se crea un contrato y se hace submit
   */
  crearContrato(): Contrato {
    // Manda el post request del contrato
    this.contrato.vivienda = (this.viviendas.filter(resource => this.viviendaId == resource.id))[0];
    this.contrato.estudiante = (this.estudiantes.filter(resource2 => this.estudianteId == resource2.id))[0];
    this.contratoService.createContrato(this.contrato).subscribe((contratoCreado: Contrato) => {
      this.contrato = contratoCreado;
      this.create.emit();
      this.toastrService.success('Se registro el contrato', 'Registro');
    }, error1 => {
      this.toastrService.error(error1, 'Registro');
    });
    return this.contrato;
  }

  /**
   * Retrieves all the universities in UniVivienda
   */
  getViviendas(): void {
    this.viviendaService.getViviendas()
      .subscribe(viviendas => {
        this.viviendas = viviendas;
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

  /**
   * Retrieves all the universities in UniVivienda
   */
  getEstudiantes(): void {
    this.estudianteService.getEstudiantes()
      .subscribe(estudiantes => {
        this.estudiantes = estudiantes;
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

  /**
   * Cancela una creacion de un contrato
   */
  cancelCreation() {
    this.cancel.emit();
    this.router.navigate(['contratos/list']);
  }

  /**
   * Se invoca cuando se inicia el proyecto con angular
   */
  ngOnInit() {
    this.contrato = new Contrato();
  }

}
