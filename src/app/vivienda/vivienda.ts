import {ViviendaService} from './vivienda.service';
import {Calificacion} from '../calificacion/calificacion';
import {Arrendador} from '../arrendador/arrendador'

export class Vivienda {

  /**
   * Direccion de la vivienda
   */
  direccion: string;

  /**
   * Ciudad de la vivienda
   */
  ciudad: string;

  /**
   * Identificador de la vivienda
   */
  id: number;
  /**
   * Nombre de la vivienda
   */
  nombre: string;

  /**
   * Descripcion de la vivienda
   */
  descripcion: string;

  /**
   * Tipo de la vivienda
   */
  tipo: string;

  /**
   * Calificaciones de la vivienda
   */
  calificaciones: Calificacion[];

  /**
   * Servicios que estan incluidos en la vivienda
   */
  serviciosIncluidos: string[];

  /**
   * Latitud de la vivienda
   */
  latitud: number;

  /**
   * Longitud de la vivienda
   */
  longitud: number;

  /**
   * URL de la imagen de la vivienda
   */
  imgUrl: string;
  
  /**
   * Arrendador de la vivienda
   */
   arrendador: Arrendador;

  toString(): string {
    let s = '';
    s += 'Nombre: ' + this.nombre + '\n';
    s += 'Ciudad: ' + this.ciudad + '\n';
    s += 'Dirección: ' + this.direccion + '\n';
    s += 'Descripción: ' + this.descripcion + '\n';
    s += 'Img: ' + this.imgUrl + '\n';
    return s;
  }
}
