import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServicioAdicional } from './servicio-adicional';
//import {ServicioAdicionalDetail} from './servicio-adicional-detail';
import { Vivienda } from '../vivienda/vivienda';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const serviciosAdicionales = '/servicios-adicionales';
const viviendas = '/viviendas';

@Injectable()
export class ServicioAdicionalService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }
  
   getServiciosAdicionales(): Observable<ServicioAdicional[]> {
        return this.http.get<ServicioAdicional[]>(API_URL + serviciosAdicionales);
    }
    
    /**
     * creates a new review
     * @param calificacion The new review to create
     */
    //createServicioAdicional(servicioAdicional: ServicioAdicional): Observable<Boolean> {
      //  return this.http.post<Boolean>(API_URL + viviendas + '/' + servicio-adicional.vivienda.id + '/' + serviciosAdicionales, servicioAdicional);
    //}
    
   // getServicioAdicionalDetail(servicioAdicionalId): Observable<ServicioAdicionalDetail> {
       // return this.http.get<ServicioAdicionalDetail>(API_URL + serviciosAdicionales + '/' + servicioAdicionalId);
    //}
    

    
}
