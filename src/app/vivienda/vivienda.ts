import {ViviendaService} from "./vivienda.service";
import {Calificacion} from "../calificacion/calificacion";

export class Vivienda {
  direccion: string;
  ciudad: string;
  id: number;
  nombre: string;
  descripcion: string;
  tipo: string;
  calificaciones: Calificacion[];
  serviciosIncluidos: string[];
  latitud: number;
  longitud: number;
  imgUrl: string;

  toString(): string {
    let s: string = '';
    s += 'Nombre: ' + this.nombre + '\n';
    s += 'Ciudad: ' + this.ciudad + '\n';
    s += 'Dirección: ' + this.direccion + '\n';
    s += 'Descripción: ' + this.descripcion + '\n';
    s += 'Img: ' + this.imgUrl + '\n';
    return s;
  }
}
