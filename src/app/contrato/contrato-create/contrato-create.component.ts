import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cuarto} from '../../cuarto/cuarto';
import {ToastrService} from 'ngx-toastr';
import {ContratoService} from '../contrato.service';
import {Contrato} from '../contrato';
import {Vivienda} from '../../vivienda/vivienda';
import {Router} from '@angular/router';

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

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  /**
   * Constructor de la clase
   * @param contratoService - Servicio del contrato que se asocia
   * @param toastrService - Servicio de Toastr que se usa para revisar la logica del forum
   */
  constructor(private contratoService: ContratoService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  /**
   * Metodo donde se crea un contrato y se hace submit
   */
  crearContrato() {
    // Manda el post request del contrato
    this.contratoService.createContrato(this.contrato).subscribe((contratoCreado: Contrato) => {
      this.create.emit();
      this.toastrService.success('Se registro el contrato', 'Registro');
    }, error1 => {
      this.toastrService.error(error1, 'Registro');
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
