import {Contrato} from './contrato';
import {ServicioAdicional} from '../servicio-adicional/servicio-adicional';

/**
 * This class represents a contract
 * It contains all the information relevant to the contrato.
 */
export class ContratoDetail extends Contrato {
  serviciosAdicionales: ServicioAdicional[];


}
