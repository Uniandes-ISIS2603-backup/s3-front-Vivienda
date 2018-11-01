import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http/';
import {Estudiante} from './estudiante';
import {Calificacion} from '../calificacion/calificacion';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/s3_vivienda-api/api/';
const estudiantes = 'estudiantes';

@Injectable()
export class EstudianteService {
  constructor(private http: HttpClient) {
  }

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(API_URL + estudiantes);
  }

  getEstudiante(estudianteId: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(API_URL + estudiantes + '/' + estudianteId);
  }

  getCalificaciones(estudianteId: number): Observable<Calificacion[]> {
    return this.http.get<Calificacion[]>(API_URL + estudiantes + '/' + estudianteId + '/calificaciones');
  }
  
  createEstudiante(estudiante: Estudiante): Observable<boolean>{
      return this.http.post<boolean>(API_URL + estudiantes, estudiante);
  }

}
