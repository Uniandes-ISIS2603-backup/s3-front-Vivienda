import { Component, OnInit } from '@angular/core';
import {ContratoService} from '../contrato.service';
import {ActivatedRoute} from '@angular/router';
import {ContratoDetail} from '../contrato-detail';

@Component({
  selector: 'app-contrato-detail',
  templateUrl: './contrato-detail.component.html',
  styleUrls: ['./contrato-detail.component.css']
})
export class ContratoDetailComponent implements OnInit {

  /**
   * Constructor de la clase
   * @param contratoService - Servicio que esta asociado al contrato
   * @param route - Enrutador para hacer conexiones
   */
  constructor(
    private contratoService: ContratoService,
    private route: ActivatedRoute
  ) { }

  /**
   * Relacion para poder tener un contratoDetail
   */
  contratoDetail: ContratoDetail;

  /**
   * Identificador del contrato que se guardara en esta variable
   */
  contrato_id: number;

  /**
   * Se llama a este metodo cuand inicia angular
   */
  ngOnInit() {
    this.contrato_id = +this.route.snapshot.paramMap.get('id');
  }

}
