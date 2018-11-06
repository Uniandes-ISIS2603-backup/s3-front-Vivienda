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

  constructor(
    private contratoService: ContratoService,
    private route: ActivatedRoute
  ) { }

  contratoDetail: ContratoDetail;

  contrato_id: number;

  ngOnInit() {
    this.contrato_id = +this.route.snapshot.paramMap.get('id');
  }

}
