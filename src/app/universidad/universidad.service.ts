import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Universidad} from './universidad';

import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const universidades = '/universidades';

@Injectable()
export class UniversidadService {
   
   constructor(private http: HttpClient) { }
   
   getUniversidades() : Observable<Universidad[]> {
   return this.http.get<Universidad[]>(API_URL + universidades);
   }
   
   
}
