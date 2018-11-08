import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServicioAdicional } from './servicio-adicional';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const serviciosAdicionales = '/servicios-adicionales';

/**
* The service provider for everything related to servicios adicionales
*/
@Injectable()
export class ServicioAdicionalService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }
  
   /**
    * Retrieves the list of servicios adicionales in univivienda
    * @returns La lista de servicios adicionales
    */
   getServiciosAdicionales(): Observable<ServicioAdicional[]> {
        return this.http.get<ServicioAdicional[]>(API_URL + serviciosAdicionales);
    }
    
    /**
    * Recupera la informacion de un servicio adicional en una vivienda dado su id
    * @param servicioAdicionalId eL id del servicio adicional
    * @returns El servicio adicional
    */
    getServicioAdicional(servicioAdicionalId): Observable<ServicioAdicional> {
        return this.http.get<ServicioAdicional>(API_URL + serviciosAdicionales + '/' + servicioAdicionalId);
    }
    
   /**
    * Crea un nuevo servicio adicional
    * @param book El nuevo servicio adicional
    * @returns El servicio adicional con su nuevo id si fue creado, false si no
    */
    createServicioAdicional(servicioAdicional): Observable<ServicioAdicional> {
        return this.http.post<ServicioAdicional>(API_URL + serviciosAdicionales, servicioAdicional);
    }
    

    
}
