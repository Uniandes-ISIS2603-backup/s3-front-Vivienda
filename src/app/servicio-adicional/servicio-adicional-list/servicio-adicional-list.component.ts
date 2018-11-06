import { Component, OnInit } from '@angular/core';
import { ServicioAdicional } from '../servicio-adicional';
import { ServicioAdicionalService } from '../servicio-adicional.service';

@Component({
  selector: 'app-servicio-adicional-list',
  templateUrl: './servicio-adicional-list.component.html',
  styleUrls: ['./servicio-adicional-list.component.css']
})
export class ServicioAdicionalListComponent implements OnInit {

    constructor(private servicioAdicionalService: ServicioAdicionalService) { } 
    serviciosAdicionales: ServicioAdicional[];
    getServiciosAdicionales(): void {
        this.servicioAdicionalService.getServiciosAdicionales().subscribe(serviciosAdicionales => this.serviciosAdicionales = serviciosAdicionales);
    }
    ngOnInit() {
        this.getServiciosAdicionales();
    }

}
