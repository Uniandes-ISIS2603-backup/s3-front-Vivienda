import {Calificacion} from '../calificacion/calificacion'

export class Estudiante {
    id: number;
    nombre: String;
    login: String;
    universidad: String;
    calificaciones: Calificacion[];
}
