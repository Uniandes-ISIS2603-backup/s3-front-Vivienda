import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Universidad} from './universidad';
import {UniversidadDetail} from './universidad-detail';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const universidades = '/universidades';

@Injectable()
export class UniversidadService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) {
  }


  getUniversidades(): Observable<Universidad[]> {
    return this.http.get<Universidad[]>(API_URL + universidades);
  }

  /**
   * Retrieves a universidad given its id
   * @param universidadId El id de la universidad
   * @returns La Universidad
   */
  getUniversidadDetail(universidadId): Observable<UniversidadDetail> {
    return this.http.get<UniversidadDetail>(API_URL + universidades + '/' + universidadId);
  }

  /**
   * Crea una universidad
   * @param universidad La nueva universidad
   * @returns La nueva universidad con un nuevo id
   */
  createUniversidad(universidad): Observable<UniversidadDetail> {
    return this.http.post<UniversidadDetail>(API_URL + universidades, universidad);
  }
  
  /**
   * Updates a new book
   * @param book The updated book
   * @returns The updated book
   */
    updateUniversidad(universidad): Observable<UniversidadDetail> {
        return this.http.put<UniversidadDetail>(API_URL + universidades + '/' + universidad.id, universidad);
    }

  generarDatos(): Observable<any> {
    return this.http.post<any>(API_URL + universidades + '/generardatos', null);
  }

}
