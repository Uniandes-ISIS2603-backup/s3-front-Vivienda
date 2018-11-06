import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Universidad} from './universidad';

const API_URL = 'http://localhost:8080/s3_vivienda-api/api/';
const universidades = 'assets/universidades.json';

@Injectable()
export class UniversidadService {
   
   constructor(private http: HttpClient) { }
   
   getUniversidades() : Observable<Universidad[]> {
   return this.http.get<Universidad[]>(universidades);
   }
   
   
}
