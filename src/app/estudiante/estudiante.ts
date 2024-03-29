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
    nombre: string;
    
    /**
     * The account's login
     */
    login: string;
    
    /**
     * The account's password
     */
    password: string;
    
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
