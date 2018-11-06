import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ServicioAdicional } from './servicio-adicional';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/s3_vivienda-api/api/";
const serviciosAdicionales = "servicios-adicionales";

@Injectable()
export class ServicioAdicionalService {

  constructor(private http: HttpClient) { }
  
   getServiciosAdicionales(): Observable<ServicioAdicional[]> {
        return this.http.get<ServicioAdicional[]>(API_URL + serviciosAdicionales);
    }
    
}
