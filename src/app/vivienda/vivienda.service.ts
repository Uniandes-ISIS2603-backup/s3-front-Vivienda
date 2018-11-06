import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vivienda} from "./vivienda";
import {ViviendaDetail} from './vivienda-detail';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const viviendas = '/viviendas';

@Injectable()
export class ViviendaService {

  constructor(private http: HttpClient) {
  }

  getViviendas(): Observable<Vivienda[]> {

    return this.http.get<Vivienda[]>(API_URL + viviendas);
  }

  getViviendaDetail(viviendaId): Observable<ViviendaDetail> {
    return this.http.get<ViviendaDetail>(API_URL + viviendas + "/" + viviendaId);
  }

  createVivienda(vivienda: Vivienda): Observable<Vivienda> {
    return this.http.post<Vivienda>(API_URL + viviendas, vivienda);
  }
}
