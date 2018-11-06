import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contrato} from './contrato';
import {ContratoDetail} from './contrato-detail';

const API_URL = 'http://localhost:8080/s3_vivienda-api/api/';
const contratos = 'assets/contratos.json';
const contracts = '/contratos';
const viviendas = '/viviendas';


@Injectable()
export class ContratoService {

  constructor(private http: HttpClient) {
  }

  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(contratos);
  }

  getContratoDetail(contratoId): Observable<ContratoDetail> {
    return this.http.get<Contrato>(API_URL + contracts + '/' + contratoId);
  }

  getContratosVivienda(viviendaId: number): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(API_URL + viviendas + viviendaId  + contracts);
  }
}
