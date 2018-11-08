import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ServicioAdicional } from './servicio-adicional';
//import {ServicioAdicionalDetail} from './servicio-adicional-detail';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const serviciosAdicionales = '/servicios-adicionales';

@Injectable()
export class ServicioAdicionalService {

  constructor(private http: HttpClient) { }
  
   getServiciosAdicionales(): Observable<ServicioAdicional[]> {
        return this.http.get<ServicioAdicional[]>(API_URL + serviciosAdicionales);
    }
    
   // getServicioAdicionalDetail(servicioAdicionalId): Observable<ServicioAdicionalDetail> {
       // return this.http.get<ServicioAdicionalDetail>(API_URL + serviciosAdicionales + '/' + servicioAdicionalId);
    //}
    

    
}
