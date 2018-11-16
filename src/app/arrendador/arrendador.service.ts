import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import { Arrendador } from './arrendador';
import { ArrendadorDetail } from './arrendador-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const arrendadores = '/arrendadores';

@Injectable()
export class ArrendadorService {

  constructor(private http: HttpClient) { }
  
  getArrendadores(): Observable<Arrendador[]>
  {
      return this.http.get<Arrendador[]>(API_URL + arrendadores)
  }
  
  getArrendadorDetail(arrendadorId: number): Observable<ArrendadorDetail>
  {
      return this.http.get<ArrendadorDetail>(API_URL + arrendadores + "/" + arrendadorId)
  }
  
    createArrendador(arrendador): Observable<Arrendador> {
        return this.http.post<Arrendador>(API_URL + arrendadores, arrendador);
    }
  generarDatos(): Observable<ArrendadorDetail[]> {
    return this.http.post<ArrendadorDetail[]>(API_URL + arrendadores + "/generardatos", null);
  }
  
        /**
     * Edits the sitioInteres
     * @param sitioInteres The sitioInteres with new attributes
     */
    updateArrendador(arrendadorId:number, arrendador: Arrendador): Observable<Arrendador>{
        return this.http.put<Arrendador>(API_URL + arrendadores + "/" + arrendadorId , arrendador);
    }
    
            /**
    * Deletes a book
    * @param bookId The book's id
    * @returns True if the book was deleted, false otherwise
    */
    deleteArrendador(arrendadorId: number): Observable<ArrendadorDetail> {
        return this.http.delete<ArrendadorDetail>(API_URL + arrendadores + '/' + arrendadorId);
    }
    
}
