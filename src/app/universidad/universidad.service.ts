import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Universidad} from './universidad';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const universidades = '/universidades';

@Injectable()
export class UniversidadService {
   
   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
   
   
   getUniversidades() : Observable<Universidad[]> {
   return this.http.get<Universidad[]>(API_URL + universidades);
   }
   
   
   /**
    * Crea una universidad
    * @param universidad La nueva universidad
    * @returns La nueva universidad con un nuevo id
    */
    createUniversidad(universidad): Observable<Universidad> {
        return this.http.post<Universidad>(API_URL + universidades, universidad);
    }
    
    generarDatos(): Observable<any> {
    return this.http.post<any>(API_URL + universidades + '/generardatos', null);
  }
   
}
