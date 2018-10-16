import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Calificacion } from './calificacion';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const editorials = 'calificaciones.json';

@Injectable()
export class CalificacionService{
    constructor(private http: HttpClient) { }
    
    getCalificaciones() : Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + editorials);
    }
}
