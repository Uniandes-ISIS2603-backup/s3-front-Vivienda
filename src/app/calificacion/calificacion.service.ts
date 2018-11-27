import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Calificacion} from './calificacion';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/s3_vivienda-api/api/';
const estudiantes = 'estudiantes';
const viviendas = 'viviendas';
const calificaciones = 'calificaciones';

@Injectable()
export class CalificacionService {

  /**
   * Constructor of the service provider
   * @param http The http client
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Retrieves all the reviews made by the student
   * @param estudianteId The Id numbre of the student
   */
  getCalificacionesEstudiante(estudianteId: number): Observable<Calificacion[]> {
    return this.http.get<Calificacion[]>(API_URL + estudiantes + '/' + estudianteId + '/' + calificaciones);
  }

  /**
   * Retrieves all the reviews made to the housing
   * @param viviendaId The Id numbre of the housing
   */
  getCalificacionesVivienda(viviendaId: number): Observable<Calificacion[]> {
    return this.http.get<Calificacion[]>(API_URL + viviendas + '/' + viviendaId + '/' + calificaciones);
  }

  /**
   * creates a new review
   * @param calificacion The new review to create
   */
  createCalificacion(calificacion: Calificacion): Observable<boolean> {
    return this.http.post<boolean>(API_URL + viviendas + '/' + calificacion.vivienda.id + '/' + calificaciones, calificacion);
  }
  
  /**
   * updates a review
   * @param calificacion The review with new information
   */
  updateCalificacion(calificacion: Calificacion): Observable<Calificacion> {
      return this.http.put<Calificacion>(API_URL + viviendas + '/' + calificacion.vivienda.id + '/' + calificaciones + '/' + calificacion.id, calificacion);
  }
  
  /**
   * deletes a review
   * @param calificacion The review to delete
   */
  deleteCalificacion(calificacion: Calificacion): Observable<boolean> {
      return this.http.delete<boolean>(API_URL + viviendas + '/' + calificacion.vivienda.id + '/' + calificaciones + '/' + calificacion.id);
  }
}
