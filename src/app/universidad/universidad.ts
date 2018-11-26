 import { Estudiante } from '../estudiante/estudiante';
 
 /**
  * Esta clase representa una Universidad de las viviendas universitarias. 
  * Contiene la informacion relevante para una universidad.
  */

    export class Universidad {
  
    /**
    * El id de la universidad
    */
    id: number;
    
    /**
    * El nombre de la universidad
    */
    nombre: string;
    
    /**
    * La latitud de la universidad
    */
    latitud: number;
    
    /**
    * La longitud de la universidad
    */
    longitud: number;
    
    /**
    * El url de la imagen de la universidad
    */
    imgUrl: string;
    
    /**
    * All the reviews made by the student
    */
    estudiantes: Estudiante[];
}
