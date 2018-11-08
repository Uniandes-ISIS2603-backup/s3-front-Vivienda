import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Universidad } from '../universidad';
import { UniversidadService } from '../universidad.service';

/**
* Componente listar de universidad
*/
@Component({
  selector: 'app-universidad-list',
  templateUrl: './universidad-list.component.html',
  styleUrls: ['./universidad-list.component.css']
})
export class UniversidadListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param universidadService El proveedor de servicios de universidad
    * @param toastrService The toastr to show messages to the user
    * @param modalDialogService The popup provider
    * @param viewRef The container for the popup
    */
    constructor(
        private universidadService: UniversidadService,
        private toastrService: ToastrService,
    ) { } 
    
   /**
    * La lista de universidades que pertenecen a las viviendas universitarias
    */
    universidades: Universidad[];
    
   /**
    * Muestra o esconde el universidad-create-component
    */
    showCreate: boolean;
    
   /**
    * Shows or hides the edition of an universidad
    */
    showEdit: boolean;

    /**
    * The id of the universidad that the user wants to edit
    */
    edit_universidad_id: number;
    
    
    /**
    * Asks the service to update the list of universidades
    */
    getUniversidades(): void {
        this.universidadService.getUniversidades()
            .subscribe(universidades => {
                this.universidades = universidades;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
/**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.showEdit) {
            this.showEdit = false;
        }
        this.showCreate = !this.showCreate!
    }

    /**
    * Shows the edit component
    */
    showEditUniversidad(id): void {
        if (this.showCreate) {
            this.showCreate = false;
        }
        this.showEdit = true;
        this.edit_universidad_id = id;
    }
    
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.edit_universidad_id = undefined;
        this.getUniversidades();
        
    }

}
