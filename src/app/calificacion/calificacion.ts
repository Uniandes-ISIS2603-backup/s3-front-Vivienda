import {Vivienda} from '../vivienda/vivienda'
import {Estudiante} from '../estudiante/estudiante'

export class Calificacion {
    id: number;
    descripcion: String;
    puntaje: number;
    vivienda: Vivienda;
    estudiante: Estudiante;
}
