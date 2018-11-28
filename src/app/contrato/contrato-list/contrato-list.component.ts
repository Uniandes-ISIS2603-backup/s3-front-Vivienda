import {Component, Input, OnInit} from '@angular/core';
import {ContratoService} from '../contrato.service';
import {Contrato} from '../contrato';
import {ViviendaService} from '../../vivienda/vivienda.service';
import {ActivatedRoute} from '@angular/router';
import {init} from '../../../../node_modules/protractor/built/launcher';
import {ContratoDetail} from '../contrato-detail';

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

  @Input() contratos: ContratoDetail[];

  ngOnInit() {

  }

}

