import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from '../estudiante.service';
import { UniversidadService } from '../../universidad/universidad.service';
import { Estudiante } from '../estudiante';
import { Universidad } from '../../universidad/universidad';

@Component({
  selector: 'app-estudiante-create',
  templateUrl: './estudiante-create.component.html',
  styleUrls: ['./estudiante-create.component.css']
})
export class EstudianteCreateComponent implements OnInit {
    
    /**
     * The constructor of the component
     * @param estudianteService The students' service provider
     * @param toastrService To print messages to the user
     */
    constructor(
        private estudianteService: EstudianteService,
        private universidadService: UniversidadService,
        private toastrService: ToastrService
    ) { }
    
    /**
     * The new student
     */
    estudiante: Estudiante;
    
    /**
     * The new student's university
     */
    universidadNombre: String;
    
    /**
     * List of all the universities in UniVivienda
     */
    universidades: Universidad[];

    @Output() cancel = new EventEmitter();
    @Output() create = new EventEmitter();
    
    /**
     * Creates a new student
     */
    createEstudiante(): void{
        this.estudiante.universidad = (this.universidades.filter(par => this.universidadNombre == par.nombre))[0];
        this.estudianteService.createEstudiante(this.estudiante).subscribe(() => {
            this.create.emit();
            this.toastrService.success("El estudiante se creó", "Creación de Estudiante")
        }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
    /**
     * Retrieves all the universities in UniVivienda
     */
    getUniversidades(): void {
        this.universidadService.getUniversidades()
            .subscribe(universidades => {
                this.universidades = universidades;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
    /**
     * Cancels the creation of the new student
     */
    cancelCreation(): void{
        this.cancel.emit();
    }
    
    /**
     * Initializes the component
     */
    ngOnInit() {
        this.estudiante = new Estudiante();
        this.getUniversidades();
    }

}
