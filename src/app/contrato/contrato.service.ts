import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contrato} from './contrato';

const API_URL = 'http://localhost:8080/s3_vivienda-api/api/';
const contratos = 'assets/contratos.json';
 

@Injectable()
export class ContratoService {

  constructor(private http: HttpClient) {
  }

  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>( contratos );
  }
}
