import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http/'
import {Estudiante} from './estudiante'
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const estudiantes = 'estudiantes.json';

@Injectable()
export class EstudianteService{
    constructor(private http: HttpClient){}
    
    getEstudiantes() : Observable<Estudiante[]>{
        return this.http.get<Estudiante[]>(API_URL + estudiantes);
    }
    
}
