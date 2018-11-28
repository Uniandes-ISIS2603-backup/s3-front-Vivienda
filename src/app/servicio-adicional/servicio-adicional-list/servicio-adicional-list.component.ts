import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

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
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) { } 
    
   /**
    * The list of servicios adicionales which belong to a vivienda in univivienda
    */
    serviciosAdicionales: ServicioAdicional[];
    
    /**
     * Id number of the housing
     */
    vivienda_id: number;
  
    /**
    * Recupera los servicios en una lista
    */
    getServiciosAdicionales(): void {
        this.servicioAdicionalService.getServiciosAdicionales(this.vivienda_id)
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
        this.vivienda_id = +this.route.snapshot.paramMap.get('id');
        this.getServiciosAdicionales();
    }

}
