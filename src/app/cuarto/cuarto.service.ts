import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cuarto} from './cuarto';
import {Observable} from 'rxjs';
import {Calificacion} from '../calificacion/calificacion';

const API_URL = 'http://localhost:8080/s3_vivienda-api/api/';
const cuartos = 'cuartos';
const viviendas = 'viviendas';

@Injectable()
export class CuartoService {
  constructor(private http: HttpClient) {
  }

  /**
   * Crea un cuarto para una vivienda especifica
   * @param cuarto - Cuarto que se va a crear por medio de la peticion http
   * @param viviendaId - Identificador de la vivienda a la cual se el va a asignar el cuarto
   */
  crearCuarto(cuarto: Cuarto, viviendaId: number): Observable<Cuarto> {
    console.log(cuarto.costoArriendo);
    return this.http.post<Cuarto>(API_URL + viviendas + '/' + viviendaId.toString() + '/' + cuartos, cuarto);
  }

  /**
   * Da todos los cuartos de una vivienda
   */
  getCuartos(viviendaId: number): Observable<Cuarto[]> {
    return this.http.get<Cuarto[]>(API_URL +  viviendas + '/' + viviendaId + '/' + cuartos);
  }

  /**
   * Modifica el cuarto segun los valores del cuarto que entra como parametro
   */
  updateCuarto(cuarto: Cuarto, viviendaId: number): Observable<Cuarto> {
    return this.http.put<Cuarto>(API_URL + viviendas + '/' + viviendaId + '/' + cuartos + '/' + cuarto.id, cuarto);
  }

}
