import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ServicioAdicional } from './servicio-adicional';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const serviciosAdicionales = 'assets/servicios-adicionales.json';

@Injectable()
export class ServicioAdicionalService {

  constructor(private http: HttpClient) { }
  
   getServiciosAdicionales(): Observable<ServicioAdicional[]> {
        return this.http.get<ServicioAdicional[]>(serviciosAdicionales);
    }
    
}
