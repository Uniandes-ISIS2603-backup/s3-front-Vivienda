import {Universidad} from './universidad'
import {Calificacion} from '../calificacion/calificacion'

export class Estudiante {
    id: number;
    nombre: String;
    login: String;
    password: String;
    universidad: Universidad;
    calificaciones: Calificacion[];
}
