import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router'
import { EstudianteService } from '../estudiante.service';
import { UniversidadService } from '../../universidad/universidad.service';
import { Estudiante } from '../estudiante';
import { Universidad } from '../../universidad/universidad';

@Component({
  selector: 'app-estudiante-edit',
  templateUrl: './estudiante-edit.component.html',
  styleUrls: ['./estudiante-edit.component.css']
})
export class EstudianteEditComponent implements OnInit {
    /**
     * The constructor of the component
     * @param estudianteService The students' service provider
     * @param route The route
     */
    constructor(private estudianteService: EstudianteService,
                private route: ActivatedRoute,
                private router: Router,
                private universidadService: UniversidadService,
                private toastrService: ToastrService) {}
                
    /**
     * The student's id number
     */
    estudiante_id : number;
    
    /**
     * The student's id number
     */
    universidadNombre : String;
    
    /**
     * The new student
     */
    estudiante : Estudiante;
    
    /**
     * The old student
     */
    //estudianteViejo : Estudiante;
    
    /**
     * List of all the universities in UniVivienda
     */
    universidades :Universidad[];
     
    /**
     * The old password
     */
    oldPassword : String;
    
    /**
     * The old password signed by the user
     */
    oldPasswordUser : String;

    /**
    * The output which tells the parent component
    * that the user no longer wants to edit a student
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated the student's information
    */
    @Output() update = new EventEmitter();
    
    /**
     * Retrives the old student
     */
    getEstudiante(): void {
        this.estudianteService.getEstudiante(this.estudiante_id)
              .subscribe(est => {
                  this.estudiante = est;
                  this.oldPassword = this.estudiante.password;
                  this.estudiante.password = "";
                  this.universidadNombre = this.estudiante.universidad.nombre;
                  this.estudiante.universidad = null;
        })
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
    
    editEstudiante():void{
        this.estudiante.universidad = (this.universidades.filter(par => this.universidadNombre == par.nombre))[0];
        if (this.oldPasswordUser == this.oldPassword){
            if (this.estudiante.password != null && this.estudiante.password.length == 0){
                this.estudiante.password = null;
            }
            this.estudianteService.updateEstudiante(this.estudiante).subscribe(() => {
                this.toastrService.success("El estudiante se modificó", "Modificar Estudiante")
                }, err => {
                        this.toastrService.error(err, "Error");
                    });
            this.update.emit();
        }
        else{
            this.toastrService.error("Contraseña Antigua Incorrecta.", "Error");
            return;
        }
    }
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to edit the student
    */
    cancelEdition(): void {
        this.cancel.emit();
        this.router.navigate(["/estudiante/" + this.estudiante_id]);
    }
    
    /**
     * Initializes the component
     */
    ngOnInit() {
        this.estudiante = new Estudiante();
        this.estudiante_id = +this.route.snapshot.paramMap.get('id');
        this.getEstudiante();
        this.getUniversidades();
    }

}
