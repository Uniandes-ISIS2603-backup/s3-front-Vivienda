import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UniversidadService } from '../universidad.service';
import { Universidad } from '../universidad';

@Component({
  selector: 'app-universidad-create',
  templateUrl: './universidad-create.component.html',
  styleUrls: ['./universidad-create.component.css']
})
export class UniversidadCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param universidadService El proveedor de servicios de universidad
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
        private universidadService: UniversidadService,
        private router: Router,
        private toastrService: ToastrService) { }

  /**
    * La  nueva universidad
    */
    universidad: Universidad;
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an universidad
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new universidad
    */
    @Output() create = new EventEmitter();
    
  /**
    * Crea una universidad
    */
    createUniversidad(): void {
        var universidad_create = {
            name: this.universidad.nombre,
            latitud: this.universidad.latitud,
            longitud: this.universidad.longitud,
            image: this.universidad.imgUrl
        };
        this.universidadService.createUniversidad(universidad_create)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("Universidad Creada", "Universidad Creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.toastrService.warning('No se creo la universidad', 'Universidad Creation');
        this.router.navigate(['/universidades/list']);
    }
    
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.universidad = new Universidad();
    }

}
