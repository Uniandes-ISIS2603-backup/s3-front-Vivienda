import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Calificacion } from './calificacion';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/s3_vivienda-api/api/";
const estudiantes = "estudiantes";
const viviendas = "viviendas";
const calificaciones = "calificaciones";

@Injectable()
export class CalificacionService{
    constructor(private http: HttpClient) { }
    
    getCalificacionesEstudiante(estudianteId: number) : Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + estudiantes + "/" +  estudianteId + "/"+ calificaciones);
    }
    
    getCalificacionesVivienda(viviendaId: number) : Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + viviendas + "/" +  viviendaId + "/" + calificaciones);
    }
    
    getCalificacion(calificacionId: number) : Observable<Calificacion> {
        return this.http.get<Calificacion>(API_URL + calificaciones + "/" + calificacionId);
    }
}
