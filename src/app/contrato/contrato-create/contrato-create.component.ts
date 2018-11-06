import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cuarto} from '../../cuarto/cuarto';
import {ToastrService} from 'ngx-toastr';
import {ContratoService} from '../contrato.service';
import {Contrato} from '../contrato';
import {Vivienda} from '../../vivienda/vivienda';

@Component({
  selector: 'app-contrato-create',
  templateUrl: './contrato-create.component.html',
  styleUrls: ['./contrato-create.component.css']
})
export class ContratoCreateComponent implements OnInit {

  // El contrato
  contrato: Contrato;

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  constructor(private contratoService: ContratoService,
              private toastrService: ToastrService) {
  }

  // Metodo donde se crea un contrato y se hace submit
  crearContrato() {
    // Manda el post request del contrato
    this.contratoService.createContrato(this.contrato).subscribe((contratoCreado: Contrato) => {
      this.create.emit();
      this.toastrService.success('Se registro el contrato', 'Registro');
    }, error1 => {
      this.toastrService.error(error1, 'Registro');
    });
  }

  cancelCreation() {
    this.cancel.emit();
  }

  ngOnInit() {
    this.contrato = new Contrato();
  }

}
