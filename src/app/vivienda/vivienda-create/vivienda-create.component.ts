import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Vivienda} from "../vivienda";
import {forEach} from "../../../../node_modules/@angular/router/src/utils/collection";
import {ViviendaService} from "../vivienda.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-vivienda-create',
  templateUrl: './vivienda-create.component.html',
  styleUrls: ['./vivienda-create.component.css']
})
export class ViviendaCreateComponent implements OnInit {

  vivienda: Vivienda;
  cuartos: string[];
  serviciosIncluidos: string;

  constructor(private viviendaService: ViviendaService,
              private toastrService: ToastrService) {
  }

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();


  crearVivienda() {
    this.procesarServiciosIncluidos();
    this.viviendaService.createVivienda(this.vivienda).subscribe(() => {
      this.create.emit();
      this.toastrService.success("Se registro la vivienda", "Registro");
    }, error1 => {
      this.toastrService.error(error1, "Registro")
    })
  }

  private procesarServiciosIncluidos() {
    let serviciosList: string[] = this.serviciosIncluidos.split(",");
    for (let i = 0; i < serviciosList.length; i++) {
      serviciosList[i] = serviciosList[i].trim()
    }
    this.vivienda.serviciosIncluidos = serviciosList;
  }

  private nuevoFormCuarto() {
    this.cuartos.push("q")
  }

  cancelCreation() {
    this.cancel.emit();
  }

  ngOnInit() {
    this.vivienda = new Vivienda();
    this.cuartos = [];
  }

}
