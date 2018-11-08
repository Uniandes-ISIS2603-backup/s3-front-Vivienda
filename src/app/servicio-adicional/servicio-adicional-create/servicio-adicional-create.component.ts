import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServicioAdicionalService } from '../servicio-adicional.service';
import { ServicioAdicional } from '../servicio-adicional';

@Component({
  selector: 'app-servicio-adicional-create',
  templateUrl: './servicio-adicional-create.component.html',
  styleUrls: ['./servicio-adicional-create.component.css']
})
export class ServicioAdicionalCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param servicioAdicionalService El proveedor de servicios de los servicios adicionales
    * @param toastrService The toastr to show messages to the user
    */
  constructor(
        private servicioAdicionalService: ServicioAdicionalService,
        private toastrService: ToastrService) { }

  /**
    * El nuevo servicio adicional
    */
    servicioAdicional: ServicioAdicional;
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create a servicio adicional
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new servicio adicional
    */
    @Output() create = new EventEmitter();
    
  /**
    * Crea un servicio adicional
    */
    //createServicioAdicional(): void {
       // var servicio_adicional_create = {
          //  name: this.servicioAdicional.nombre,
           // descripcion: this.servicioAdicional.descripcion,
       // };
       // this.servicioAdicionalService.createServicioAdicional(servicio_adicional_create)
           // .subscribe(() => {
             //   this.create.emit();
              //  this.toastrService.success("Servicio Adicional Creado", "ServicioAdicional creation");
          //  }, err => {
              //  this.toastrService.error(err, "Error");
           // });
   // }
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.servicioAdicional = new ServicioAdicional();
    }

}
