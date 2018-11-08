import {Vivienda} from '../vivienda/vivienda'

 /**
  * Esta clase representa un servicio adicional de las viviendas universitarias. 
  * Contiene la informacion relevante para un servicio adicional.
  */
export class ServicioAdicional {
    
    /**
    * El id del servicio adicional
    */
    id: number;
    
    /**
    * El nombre del servicio adicional
    */
    nombre: string;
    
    /**
    * La descripcion del servicio adicional
    */
    descripcion: string;
    
    /**
    * La vivienda que ofrece el servicio adicinal
    */
    vivienda: Vivienda;
}
