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
export class ContratoListComponent implements OnInit {
  constructor(private contratoService: ContratoService, private route: ActivatedRoute) {
  }

  contratos: Contrato[];

  getContratos(): void {
    this.contratoService.getContratos().subscribe(pp => this.contratos = pp);
  }

  ngOnInit() {
    this.getContratos();
  }

}

