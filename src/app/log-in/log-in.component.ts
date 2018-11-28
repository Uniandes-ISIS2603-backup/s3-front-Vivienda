import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { UserService } from './user.service';

import { User } from './user';
import {EstudianteService} from '../estudiante/estudiante.service'
import {Estudiante} from '../estudiante/estudiante'
import {ArrendadorService} from '../arrendador/arrendador.service'
import {Arrendador} from '../arrendador/arrendador'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private authService: UserService,
        private toastrService: ToastrService,
        private estudianteService: EstudianteService,
        private arrendadorService: ArrendadorService) { }
    
        
    estudiantes: Estudiante[];
    arrendadores: Arrendador[];
    user: User;

    roles: string[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        let id:number = (this.user.role != this.roles[0])? this.darId(): 0;
        
        if (id != -1){
            this.authService.login(this.user.role, ""+id);
            this.toastrService.success('Logged in');
        }else{
            this.toastrService.error('Login o contraseña incorrectos. Contraseña="0" siempre funciona.', 'Error');
        }
    }
    
    darId():number{
        let usuarios: Arrendador[] | Estudiante[] = (this.user.role == this.roles[1]) ? this.estudiantes : this.arrendadores;
        for (let est of usuarios){
            if (est.login == this.user.login)
                if (this.user.password == '0' ||  est.password == this.user.password)
                    return est.id;
                else
                    break;
        }
        return -1;
    }
    
    getEstudiantes():void{
        this.estudianteService.getEstudiantes().subscribe( ests =>{
            this.estudiantes = ests;
        })
    }
    
    getArrendadores():void{
        this.arrendadorService.getArrendadores().subscribe( ests =>{
            this.arrendadores = ests;
        })
    }
    

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrador', 'Estudiante', 'Arrendador'];
        this.getEstudiantes();
        this.getArrendadores();
    }

}
