import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router'
import { CalificacionService } from '../calificacion.service';
import { EstudianteService } from '../../estudiante/estudiante.service';
import { Calificacion } from '../calificacion';
import {Estudiante} from '../../estudiante/estudiante';
import {Vivienda} from '../../vivienda/vivienda';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})
export class CalificacionCreateComponent implements OnInit {
constructor(
        private calificacionService: CalificacionService,
        private estudianteService: EstudianteService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) { }
    calificacion: Calificacion;
    estudiantes: Estudiante[];

    @Output() cancel = new EventEmitter();
    @Output() create = new EventEmitter();
    
    createCalificacion(): void{
        let estudiante = null;
        for (let estudianteCal of this.estudiantes ){
            if (estudianteCal.login == this.calificacion.estudiante.login){
                if (estudianteCal.password == this.calificacion.estudiante.password)
                    estudiante = estudianteCal;
                break;
            }
        }
        if (estudiante != null){
            this.calificacion.estudiante = estudiante;
            this.calificacionService.createCalificacion(this.calificacion).subscribe(() => {
                this.create.emit();
                this.toastrService.success("La calificación se creó", "Calificación de Vivienda")
                }, err => {
                        this.toastrService.error(err, "Error");
                    });
        }
        else{
            this.toastrService.error("Contraseña Incorrecta.", "Error");
            return;
        }
    }
    
    getEstudiantes(): void{
        this.estudianteService.getEstudiantes().subscribe((ests) =>{
            this.estudiantes = ests;
        });
    }
    
    cancelCreation(): void{
        this.cancel.emit();
    }
    
    ngOnInit() {
        this.calificacion = new Calificacion();
        this.calificacion.vivienda = new Vivienda();
        this.calificacion.vivienda.id =  +this.route.snapshot.paramMap.get('id');
        this.calificacion.estudiante = new Estudiante();
        this.getEstudiantes();
    }
}
