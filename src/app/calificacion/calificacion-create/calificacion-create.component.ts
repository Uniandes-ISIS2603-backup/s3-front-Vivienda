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
    
    /**
    * Constructor for the component
    * @param calificacionService The reviews' services provider
    * @param estudianteService The students' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private calificacionService: CalificacionService,
        private estudianteService: EstudianteService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) { }
    
    /**
     * The new review
     */
    calificacion: Calificacion;
    
    /**
     * The list of all the students in UniVivienda
     */
    estudiantes: Estudiante[];

    @Output() cancel = new EventEmitter();
    @Output() create = new EventEmitter();
    
    /**
     * Checks the credentials of the student creating the review and creates a new review
     */
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
    
    /**
     * Retrives all the students in UniVivienda
     */
    getEstudiantes(): void{
        this.estudianteService.getEstudiantes().subscribe((ests) =>{
            this.estudiantes = ests;
        });
    }
    
    /**
     * Cancels the creation of the new review
     */
    cancelCreation(): void{
        this.cancel.emit();
    }
    
    /**
     * Initializes the component
     */
    ngOnInit() {
        this.calificacion = new Calificacion();
        this.calificacion.vivienda = new Vivienda();
        this.calificacion.vivienda.id =  +this.route.snapshot.paramMap.get('id');
        this.calificacion.estudiante = new Estudiante();
        this.getEstudiantes();
    }
}
