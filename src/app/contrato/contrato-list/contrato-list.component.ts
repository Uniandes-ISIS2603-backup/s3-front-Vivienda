import {Component, OnInit} from '@angular/core';
import {ContratoService} from '../contrato.service';
import {Contrato} from '../contrato';
import {ViviendaService} from '../../vivienda/vivienda.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contrato-list',
  templateUrl: './contrato-list.component.html',
  styleUrls: ['./contrato-list.component.css']
})

/**
 * Clase encargada del componente para listar contratos
 */
export class ContratoListComponent implements OnInit {

  /**
   * Constructor de la clase ContratoListComponent
   * @param contratoService - Servicio asociado a la clase
   * @param route - Enrutador por el que se hara las conexiones
   */
  constructor(private contratoService: ContratoService, private route: ActivatedRoute) {
  }

  /**
   * Id number of the housing
   */
  vivienda_id: number;

  /**
   * String referencing the type of table to show
   */
  listaDe: String = 'vivienda';

  /**
   * Lista de contratos que se van a desplegar
   */
  contratos: Contrato[];

  /**
   * Da los contratos por medio de una suscripcion a una peticion de http
   */
  getContratos(): void {
    this.contratoService.getContratos().subscribe(pp => this.contratos = pp);
  }

  /**
   * Se llama cuando se inicia angular
   */
  ngOnInit() {
    this.getContratos();
  }

}

