import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vivienda} from './vivienda';
import {ViviendaDetail} from './vivienda-detail';

import {environment} from '../../environments/environment';
import {Calificacion} from "../calificacion/calificacion";

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
    return this.http.get<ViviendaDetail>(API_URL + viviendas + '/' + viviendaId);
  }

  createVivienda(vivienda: Vivienda): Observable<Vivienda> {
    return this.http.post<Vivienda>(API_URL + viviendas, vivienda);
  }

  updateVivienda(vivienda: Vivienda): Observable<Vivienda> {
    return this.http.put<Vivienda>(API_URL + viviendas + "/" +vivienda.id, vivienda);
  }

  generarDatos(): Observable<any> {
    return this.http.post<any>(API_URL + viviendas + '/generardatos', null);
  }

  getCalificaciones(viviendaId: number): Observable<Calificacion[]> {
    return this.http.get<Calificacion[]>(API_URL + viviendas + "/" + viviendaId + "/calificaciones");
  }
  
    mapearCalificaciones(viviendas: Vivienda[]): any {
        let mapeoCalificaciones = {};
        for (let vivienda of viviendas)
            mapeoCalificaciones[vivienda.id] = this.promediarCalificaciones(vivienda);
        return mapeoCalificaciones;
    }
    
    promediarCalificaciones(vivienda: Vivienda): String{
        if (vivienda.calificaciones && vivienda.calificaciones.length > 0){ 
            let suma:number = 0;
            for (let calificacion of vivienda.calificaciones)
                suma += calificacion.puntaje;
            return (suma / vivienda.calificaciones.length).toFixed(2);
        }else
            return "N/A";
    }
    
}
