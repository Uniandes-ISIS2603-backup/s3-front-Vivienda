import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contrato} from './contrato';
import {ContratoDetail} from './contrato-detail';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
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
    return this.http.get<Contrato[]>(API_URL + viviendas + '/' + viviendaId + '/' + contracts);
  }

  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(API_URL + contracts, contrato);
  }

  generarDatos(): Observable<any> {
    return this.http.post<any>(API_URL + contracts + '/generardatos', null);
  }
}
