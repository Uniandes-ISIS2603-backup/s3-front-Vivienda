import {Vivienda} from '../vivienda/vivienda';
import {Estudiante} from '../estudiante/estudiante';

export class Calificacion {
  /**
   * The Id number
   */
  id: number;

  /**
   * The description
   */
  descripcion: string;

  /**
   * The score
   */
  puntaje: number;

  /**
   * The housing to which the review is made
   */
  vivienda: Vivienda;

  /**
   * The student thah made the review
   */
  estudiante: Estudiante;
}
