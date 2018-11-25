import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CalificacionService } from '../calificacion.service';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-calificacion-edit',
  templateUrl: './calificacion-edit.component.html',
  styleUrls: ['./calificacion-edit.component.css']
})
export class CalificacionEditComponent implements OnInit {
    
    @Input() calificacion: Calificacion;
    password : String;
    
    /**
    * The output which tells the parent component
    * that the user updated a the review
    */
    @Output() update = new EventEmitter();
    
    @Output() cancel = new EventEmitter();
    
    constructor(private calificacionService: CalificacionService,
                private toastrService: ToastrService) { }
                
                
    verificarPassword(): boolean{
        let resp: boolean = this.calificacion.estudiante.password == this.password; 
        if (!resp)
            this.toastrService.error("Contraseña Incorrecta.", "Error");
        return resp;
    }
    
    editCalificacion(): void{
        if (this.verificarPassword()){
            this.calificacionService.updateCalificacion(this.calificacion).subscribe(() => {
                this.toastrService.success("La calificación se modificó", "Modificar Calificación");
                this.update.emit();
                }, err => {
                        this.toastrService.error(err, "Error");
                    });
        }
    }
    
    deleteCalificacion(): void{
        if (this.verificarPassword()){
            this.calificacionService.deleteCalificacion(this.calificacion).subscribe(() => {
                this.toastrService.success("La calificación se eliminó", "Eliminar Calificación");
                this.update.emit();
                }, err => {
                        this.toastrService.error(err, "Error");
                    });
        }
    }
    
    cancelEdit():void{
        this.cancel.emit();
    }

    ngOnInit() {
    }

}
