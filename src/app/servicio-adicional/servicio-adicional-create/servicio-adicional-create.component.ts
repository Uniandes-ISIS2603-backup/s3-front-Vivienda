import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ServicioAdicionalService } from '../servicio-adicional.service';
import { ServicioAdicional } from '../servicio-adicional';
import { ViviendaService } from '../../vivienda/vivienda.service';
import { Vivienda } from '../../vivienda/vivienda';

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
        private toastrService: ToastrService,
        private viviendaService: ViviendaService,
        private router: Router
        ) { }

  /**
    * El nuevo servicio adicional
    */
    servicioAdicional: ServicioAdicional;
    
    /**
    * The list of all the editorials in the BookStore
    */
    viviendas: Vivienda[];
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
    * Retrieves the list of editorials in the BookStore
    */
    getViviendas(): void {
        this.viviendaService.getViviendas()
            .subscribe(viviendas => {
                this.viviendas = viviendas;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
  /**
    * Creates a new servicioadicional
    */
    createServicioAdicional(): void {
        if (this.servicioAdicional.vivienda == null) {
            this.toastrService.error('The servicio must have a vivienda!', 'Error');
        } else {
            var servicio_adicional_create = {
                name: this.servicioAdicional.nombre,
                descripcion: this.servicioAdicional.descripcion,
                vivienda: this.servicioAdicional.vivienda,
            };
            this.servicioAdicionalService.createServicioAdicional(servicio_adicional_create)
                .subscribe(servicioAdicional => {
                    this.router.navigate(['/servicios-adicionales/' + servicioAdicional.id + '/details']);
                    this.toastrService.success("The servicio adicional was successfully created", 'ServicioAdicional creation');
                }, err => {
                    this.toastrService.error(err, 'Error');
                });
        }
    }
    
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
        this.getViviendas();
    }

}
