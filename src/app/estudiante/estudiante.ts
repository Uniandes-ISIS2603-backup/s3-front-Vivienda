import { Universidad } from '../universidad/universidad';
import {Calificacion} from '../calificacion/calificacion'
import {Contrato} from '../contrato/contrato'

export class Estudiante {
    /**
     * The id number
     */
    id: number;
    
    /**
     * The name
     */
    nombre: String;
    
    /**
     * The account's login
     */
    login: String;
    
    /**
     * The account's password
     */
    password: String;
    
    /**
     * The university
     */
    universidad: Universidad;
    
    /**
     * All the reviews made by the student
     */
    calificaciones: Calificacion[];
    
    /**
     * The agreement with the householder
     */
    contrato: Contrato;
}
