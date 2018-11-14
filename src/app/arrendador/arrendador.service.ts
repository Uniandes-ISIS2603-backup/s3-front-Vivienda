import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import { Arrendador } from './arrendador';
import { ArrendadorDetail } from './arrendador-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const arrendadores = '/arrendadores';

@Injectable()
export class ArrendadorService {

  constructor(private http: HttpClient) { }
  
  getArrendadores(): Observable<Arrendador[]>
  {
      return this.http.get<Arrendador[]>(API_URL + arrendadores)
  }
  
  getArrendadorDetail(arrendadorId: number): Observable<ArrendadorDetail>
  {
      return this.http.get<ArrendadorDetail>(API_URL + arrendadores + "/" + arrendadorId)
  }
  
    createArrendador(arrendador): Observable<Arrendador> {
        return this.http.post<Arrendador>(API_URL + arrendadores, arrendador);
    }
  generarDatos(): Observable<ArrendadorDetail[]> {
    return this.http.post<ArrendadorDetail[]>(API_URL + arrendadores + "/generardatos", null);
  }
    
}
