import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from '../estudiante.service';
import { Estudiante } from '../estudiante';
import { Universidad } from '../universidad';

@Component({
  selector: 'app-estudiante-create',
  templateUrl: './estudiante-create.component.html',
  styleUrls: ['./estudiante-create.component.css']
})
export class EstudianteCreateComponent implements OnInit {
  constructor(
        private estudianteService: EstudianteService,
        private toastrService: ToastrService
    ) { }
    
    estudiante: Estudiante;
    universidadNombre: String;
    universidades: Universidad[];

    @Output() cancel = new EventEmitter();
    @Output() create = new EventEmitter();
    
    createEstudiante(): void{
        this.estudiante.universidad = (this.universidades.filter(par => this.universidadNombre = par.nombre))[0];
        window.alert(this.estudiante.universidad.nombre);
        this.estudianteService.createEstudiante(this.estudiante).subscribe(() => {
            this.create.emit();
            this.toastrService.success("El estudiante se creó", "Creación de Estudiante")
        }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
    getUniversidades(): void{
        this.estudianteService.getUniversidades().subscribe((univs) =>{
            this.universidades = univs;
        });
    }
    
    cancelCreation(): void{
        this.cancel.emit();
    }
    ngOnInit() {
        this.estudiante = new Estudiante();
        this.getUniversidades();
    }

}
