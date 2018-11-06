import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cuarto} from './cuarto';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/s3_vivienda-api/api/';
const cuartos = 'cuartos';
const viviendas = 'viviendas';

@Injectable()
export class CuartoService {
  constructor(private http: HttpClient) {
  }

  crearCuarto(cuarto: Cuarto, viviendaId: number): Observable<Cuarto> {
    console.log(cuarto.costoArriendo);
    return this.http.post<Cuarto>(API_URL + viviendas + '/' + viviendaId.toString() + '/' + cuartos, cuarto);
  }
}
