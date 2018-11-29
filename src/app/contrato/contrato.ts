import {ViviendaDetail} from '../vivienda/vivienda-detail';
import {Estudiante} from '../estudiante/estudiante';
import {Cuarto} from '../cuarto/cuarto';
import {Arrendador} from '../arrendador/arrendador';

export class Contrato {

  /**
   * Identificador del contrato
   */
  id: number;

  /**
   * Fecha de inicio del contrato
   */
  fechaInicio: string;

  /**
   * Fecha final del contrato
   */
  fechaFin: string;

  /**
   * Metodo de pago del cliente
   */
  metodoPago: number;

  /**
   * Vivienda asociada
   */
  vivienda: ViviendaDetail;

  /**
   * Estudiante asociado al contrato
   */
  estudiante: Estudiante;

  /**
   * Arrendador asociado al contrato
   */
  arrendador: Arrendador;
  
  cuarto: Cuarto;

}
