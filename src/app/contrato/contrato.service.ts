import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contrato} from './contrato';
import {ContratoDetail} from './contrato-detail';
import {environment} from '../../environments/environment';

/**
 * Constante para la direccion del api para conectarse al back
 */
const API_URL = environment.apiURL;

/**
 * Constante para acceder al json de contratos
 */
const contratos = 'assets/contratos.json';

/**
 * Path para poder entrar a los contratos
 */
const contracts = '/contratos';

/**
 * Path para poder entrar a las viviendas
 */
const viviendas = '/viviendas';

/**
 * Clase encargada de manejar el service de contrato
 */
@Injectable()
export class ContratoService {

  /**
   * Constructor de la clase
   * @param http - Cliente de http para poder hacer peticiones
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Da los contratos que se consiguen por medio de la peticion http
   */
  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(contratos);
  }

  /**
   * Da el contrato detail por medio de una peticion http
   * @param contratoId - Identificador del contrato que se quiere conseguir
   */
  getContratoDetail(contratoId): Observable<ContratoDetail> {
    return this.http.get<Contrato>(API_URL + contracts + '/' + contratoId);
  }

  /**
   * Da los contratos de una vivienda especifica
   * @param viviendaId - Identificador de la vivienda de la que se quiere conseguir los contratos
   */
  getContratosVivienda(viviendaId: number): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(API_URL + viviendas + '/' + viviendaId + '/' + contracts);
  }

  /**
   * Crea un contrato por medio de una peticion de http
   * @param contrato - Contrato que se va a crear y se le va a atribuir el elemento que viene de la peticion
   */
  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(API_URL + contracts, contrato);
  }

  /**
   * Genera los datos para poder crear contratos
   */
  generarDatos(): Observable<any> {
    return this.http.post<any>(API_URL + contracts + '/generardatos', null);
  }
}
