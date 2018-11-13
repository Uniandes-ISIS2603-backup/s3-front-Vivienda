import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {SitioInteres} from './sitioInteres';

const API_URL = environment.apiURL;
const sitiosInteres = '/sitiosInteres';
const sitioInteres = '/sitioInteres';
const viviendas = '/viviendas';

@Injectable()
export class SitioInteresService {
  constructor(private http: HttpClient) {
  }

  createSitioInteres(viviendaId: number, sitio: SitioInteres): Observable<SitioInteres> {
    return this.http.post<SitioInteres>(API_URL + viviendas + '/' + viviendaId + sitioInteres, sitio);
  }

  generarDatos(): Observable<any> {
    return this.http.post<any>(API_URL + sitiosInteres + '/generardatos', null);
  }
}


