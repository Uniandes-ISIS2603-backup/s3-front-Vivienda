import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ServicioAdicional } from '../servicio-adicional';
import { ServicioAdicionalService } from '../servicio-adicional.service';

/**
* The component for the list of servicios adicionales 
*/
@Component({
  selector: 'app-servicio-adicional-list',
  templateUrl: './servicio-adicional-list.component.html',
  styleUrls: ['./servicio-adicional-list.component.css']
})
export class ServicioAdicionalListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param servicioAdicionalService The servicio adicional services provider
    * @param toastrService The toastr to show messages to the user
    * @param modalDialogService The popup provider
    * @param viewRef The container for the popup
    */
    constructor
    (
        private servicioAdicionalService: ServicioAdicionalService,
        private toastrService: ToastrService
    ) { } 
    
   /**
    * The list of servicios adicionales which belong to a vivienda in univivienda
    */
    serviciosAdicionales: ServicioAdicional[];
    
    /**
    * Recupera los servicios en una lista
    */
    getServiciosAdicionales(): void {
        this.servicioAdicionalService.getServiciosAdicionales()
            .subscribe(serviciosAdicionales => {
                this.serviciosAdicionales = serviciosAdicionales;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
    /**
    * This will initialize the component by retrieving the list of servicios adicionales from the service
    * This function will be called when the component is created
    */
    ngOnInit() {
        this.serviciosAdicionales = [];
        this.getServiciosAdicionales();
    }

}
