import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CuartoService} from '../cuarto.service';
import {Cuarto} from '../cuarto';

@Component({
  selector: 'app-cuarto-list',
  templateUrl: './cuarto-list.component.html',
  styleUrls: ['./cuarto-list.component.css']
})
export class CuartoListComponent implements OnInit {

  constructor(private cuartoService: CuartoService, private route: ActivatedRoute) { }

  /**
   * Id number of the housing
   */
  vivienda_id: number;

  /**
   * String referencing the type of table to show
   */
  listaDe: String = 'vivienda';


  /**
   * Lista de cuartos que se van a desplegar
   */
  cuartos: Cuarto[];

  /**
   * Da los cuartos por medio de una suscripcion a una peticion de http
   */
  getCuartos(): void {
    this.cuartoService.getCuartos(this.vivienda_id).subscribe(pp => this.cuartos = pp);
  }

  /**
   * Se llama cuando se inicia angular
   */
  ngOnInit() {
    this.vivienda_id = +this.route.snapshot.paramMap.get('id');
    this.getCuartos();
  }

}
