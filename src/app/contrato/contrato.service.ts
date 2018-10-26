import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contrato} from './contrato';

const API_URL = 'http://localhost:8080/s3_vivienda-api/api/';
const contratos = 'contratos';


@Injectable()
export class ContratoService {

  constructor(private http: HttpClient) {
  }

  // getContratos(): Contrato[] {
  //   const contratos: Contrato[] = new Array();
  //   for (let i = 0; i < 10; i++) {
  //     const fechaIn = new Date(2018, 10, 25);
  //     const fechaFin = new Date(2019, 5, 30);
  //     const modoPago = i + 1;
  //     const contract = new Contrato(fechaIn, fechaFin, modoPago);
  //     contratos.push(contract);
  //   }
  //   return contratos;
  // }

  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(API_URL + contratos);
  }
}
