import {Component, OnInit} from '@angular/core';
import {ContratoService} from '../contrato.service';
import {Contrato} from '../contrato';

@Component({
  selector: 'app-contrato-list',
  templateUrl: './contrato-list.component.html',
  styleUrls: ['./contrato-list.component.css']
})
export class ContratoListComponent implements OnInit {
  constructor(private contratoService: ContratoService) {
  }

  contratos: Contrato[];

  getContratos(): void {
    this.contratoService.getContratos().subscribe(pp => this.contratos = pp);
  }

  ngOnInit() {
    this.getContratos();
  }

}

