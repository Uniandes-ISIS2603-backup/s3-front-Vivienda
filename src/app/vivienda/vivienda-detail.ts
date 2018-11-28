/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Vivienda} from './vivienda';
import {SitioInteres} from '../sitio-interes/sitioInteres';
import {Cuarto} from '../cuarto/cuarto';
import {ServicioAdicional} from '../servicio-adicional/servicio-adicional';
import {ContratoDetail} from '../contrato/contrato-detail';

export class ViviendaDetail extends Vivienda {
  sitiosDeInteres: SitioInteres[];
  cuartos: Cuarto[];
  serviciosIncluidos: string[];
  serviciosAdicionales: ServicioAdicional[];
  contratos: ContratoDetail[];

}


