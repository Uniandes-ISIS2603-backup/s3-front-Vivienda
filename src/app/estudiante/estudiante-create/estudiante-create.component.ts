import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from '../estudiante.service';
import { Estudiante } from '../estudiante';

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

    @Output() cancel = new EventEmitter();
    @Output() create = new EventEmitter();
    
    createEstudiante(): void{
        this.estudianteService.createEstudiante(this.estudiante).subscribe(() => {
            this.create.emit();
            this.toastrService.success("El estudiante se creó", "Creación de Estudiante")
        }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
    cancelCreation(): void{
        this.cancel.emit();
    }
    ngOnInit() {
        this.estudiante = new Estudiante();
    }

}
