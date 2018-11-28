import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServicioAdicional } from '../servicio-adicional/servicio-adicional';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const serviciosAdicionales = '/servicios-adicionales';
const viviendas = 'viviendas';

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
   getServiciosAdicionales(viviendaId: number): Observable<ServicioAdicional[]> {
        return this.http.get<ServicioAdicional[]>(API_URL +  viviendas + '/' + viviendaId + '/' + serviciosAdicionales);
    }
        
   /**
    * Crea un nuevo servicio adicional
    * @param book El nuevo servicio adicional
    * @returns El servicio adicional con su nuevo id si fue creado, false si no
    */
    createServicioAdicional(servicioAdicional: ServicioAdicional, viviendaId: number): Observable<ServicioAdicional> {
        console.log(servicioAdicional.costo);
        return this.http.post<ServicioAdicional>(API_URL + viviendas + '/' + viviendaId.toString() + '/' + serviciosAdicionales, servicioAdicional);
    }
    
    /**
   * Modifica el servicio adicional segun los valores del servicio adicional que entra como parametro
   */
  updateServicioAdicional(servicioAdicional: ServicioAdicional, viviendaId: number): Observable<ServicioAdicional> {
    return this.http.put<ServicioAdicional>(API_URL + viviendas + '/' + viviendaId + '/' + serviciosAdicionales + '/' + servicioAdicional.id, servicioAdicional);
  }
  
 /**
   * deletes a servicio adiconal
   * @param servicioAdicional El servicio adiconal a borrar
   */
  deleteServicioAdicional(servicioAdicional: ServicioAdicional): Observable<boolean> {
      return this.http.delete<boolean>(API_URL + viviendas + '/' + servicioAdicional.vivienda.id + '/' + serviciosAdicionales + '/' + servicioAdicional.id);
  }

    
}
