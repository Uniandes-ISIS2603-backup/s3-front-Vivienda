import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ServicioAdicionalService } from '../servicio-adicional.service';
import {ServicioAdicional} from '../servicio-adicional';
import { Vivienda } from '../../vivienda/vivienda';

@Component({
  selector: 'app-servicio-adicional-detail',
  templateUrl: './servicio-adicional-detail.component.html',
  styleUrls: ['./servicio-adicional-detail.component.css']
})
export class ServicioAdicionalDetailComponent implements OnInit {

   /**
    * The constructor of the component
    * @param servicioAdicionalService The servicio adicional service which communicates with the API
    * @param route The route which helps to retrieves the id of the servicio adicional to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
        private servicioAdicionalService: ServicioAdicionalService,
        private route: ActivatedRoute,
        private router: Router,
        private toastrService: ToastrService
        ) { 
        ////This is added so we can refresh the view when one of the servicios in
        //the "Other servicios" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });}
  
  /**
   * The service whose details we want to show
   */
   servicioAdicional: ServicioAdicional;
   
 /**
  * The services's id retrieved from the address
  */
  servicioAdicional_id: number;
  
  /**
    * Los otros servicios adicionales shown in the sidebar
    */
    other_servicios_adicionales: ServicioAdicional[];
    
  /**
    * The suscription which helps to know when a new servicio adicional
    * needs to be loaded
    */
    navigationSubscription;
    
    
    /**
    * The function which retrieves the details of the servicio adicional that
    * we want to show
    */
    getServicioAdicional(): void {
        this.servicioAdicionalService.getServicioAdicional(this.servicioAdicional_id)
            .subscribe(servicioAdicional => {
                this.servicioAdicional = servicioAdicional;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
    /**
    * This function retrieves all the servicios adicionales in the vivienda to show them in the list
    */
    getAllServiciosAdicionales(): void {
        this.servicioAdicionalService.getServiciosAdicionales()
            .subscribe(serviciosAdiconales => {
                this.other_servicios_adicionales = serviciosAdiconales;
                this.other_servicios_adicionales = this.other_servicios_adicionales.filter(servicioAdicional => servicioAdicional.id !== this.servicioAdicional_id);
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }


  ngOnInit() {    
        this.servicioAdicional_id = +this.route.snapshot.paramMap.get('id');
        this.servicioAdicional = new ServicioAdicional();
        this.servicioAdicional.vivienda = new Vivienda();
        this.other_servicios_adicionales = [];
        this.getServicioAdicional();
        this.getAllServiciosAdicionales();
  }
  
      /**
    * This function helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

}
