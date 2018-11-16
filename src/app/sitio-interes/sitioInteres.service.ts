import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {SitioInteres} from './sitioInteres';
import {SitioInteresDetail} from './sitioInteresDetail';

const API_URL = environment.apiURL;
const sitiosInteres = '/sitiosInteres';
const sitioInteres = '/sitioInteres';
const viviendas = '/viviendas';

@Injectable()
export class SitioInteresService {
  constructor(private http: HttpClient) {
  }

  createSitioInteres(viviendaId: number, sitio: SitioInteres): Observable<SitioInteres> {
    return this.http.post<SitioInteres>(API_URL + viviendas + '/' + viviendaId + sitioInteres, sitio);
  }

  generarDatos(): Observable<any> {
    return this.http.post<any>(API_URL + sitiosInteres + '/generardatos', null);
  }
  
      /**
     * Retrieves a student
     * @param estudianteId The student's id
     */
    getSitioInteresDetail(viviendaId: number, sitioInteresId: number): Observable<SitioInteresDetail> {
      return this.http.get<SitioInteresDetail>(API_URL + viviendas + "/" + viviendaId + sitioInteres + '/' + sitioInteresId);
    }
  
      /**
     * Edits the sitioInteres
     * @param sitioInteres The sitioInteres with new attributes
     */
    updateSitioInteres(viviendaId: number, sitioInteresId:number, sitio: SitioInteres): Observable<SitioInteres>{
        return this.http.put<SitioInteres>(API_URL + viviendas + '/' + viviendaId + sitioInteres + "/" + sitioInteresId , sitio);
    }
    
        /**
    * Deletes a book
    * @param bookId The book's id
    * @returns True if the book was deleted, false otherwise
    */
    deleteSitioInteres(viviendaId: number, sitioInteresId: number): Observable<SitioInteresDetail> {
        return this.http.delete<SitioInteresDetail>(API_URL + viviendas + "/" + viviendaId + sitioInteres + '/' + sitioInteresId);
    }
}


