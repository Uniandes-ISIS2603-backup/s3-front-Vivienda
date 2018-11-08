import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http/';
import {Estudiante} from './estudiante';
import {Calificacion} from '../calificacion/calificacion';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/s3_vivienda-api/api/';
const estudiantes = 'estudiantes';


@Injectable()
export class EstudianteService {
    
    /**
     * Constructor for the service provider
     */
    constructor(private http: HttpClient) {
    }
    
    /**
     * Retrieves all the students in UniVivienda
     */
    getEstudiantes(): Observable<Estudiante[]> {
      return this.http.get<Estudiante[]>(API_URL + estudiantes);
    }

    /**
     * Retrieves a student
     * @param estudianteId The student's id
     */
    getEstudiante(estudianteId: number): Observable<Estudiante> {
      return this.http.get<Estudiante>(API_URL + estudiantes + '/' + estudianteId);
    }

    /**
     * Retrieves all the reviews made by a student
     * @param estudianteId The student's id
     */
    getCalificaciones(estudianteId: number): Observable<Calificacion[]> {
      return this.http.get<Calificacion[]>(API_URL + estudiantes + '/' + estudianteId + '/calificaciones');
    }
    
    /**
     * Creates a new student
     * @param estudiante The new student to create
     */
    createEstudiante(estudiante: Estudiante): Observable<boolean>{
        return this.http.post<boolean>(API_URL + estudiantes, estudiante);
    }

    /**
     * Generates data to populate UniVivienda's data base
     */
    generarDatos(): Observable<any> {
      return this.http.post<any>(API_URL + estudiantes + "/generardatos", null);
    }

}
