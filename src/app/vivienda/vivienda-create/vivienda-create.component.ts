import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Vivienda} from "../vivienda";
import {ViviendaService} from "../vivienda.service";
import {ToastrService} from "ngx-toastr";
import {Cuarto} from "../../cuarto/cuarto";
import {CuartoService} from "../../cuarto/cuarto.service";
import {isEmpty} from "rxjs/operators";
import {and} from "../../../../node_modules/@angular/router/src/utils/collection";

@Component({
  selector: 'app-vivienda-create',
  templateUrl: './vivienda-create.component.html',
  styleUrls: ['./vivienda-create.component.css']
})
export class ViviendaCreateComponent implements OnInit {

  vivienda: Vivienda;
  cuartos: Cuarto[];
  serviciosIncluidos: string;

  constructor(private viviendaService: ViviendaService,
              private cuartosService: CuartoService,
              private toastrService: ToastrService) {
  }

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();


  crearVivienda() {
    console.log("CREAR");
    this.procesarServiciosIncluidos();
    this.viviendaService.createVivienda(this.vivienda).subscribe((viviendaCreada: Vivienda) => {
      this.create.emit();
      this.toastrService.success("Se registro la vivienda", "Registro");
      alert(viviendaCreada.id);
      for (let i = 0; i < this.cuartos.length; i++) {
        let cuarto: Cuarto = this.cuartos[i];
        console.log(cuarto.nombre + " " + cuarto.costo);
        if (!this.stringIsEmpty(cuarto.nombre) && cuarto.costo) {
          this.cuartosService.crearCuarto(cuarto, viviendaCreada.id).subscribe((cuartoCreado: Cuarto) => {
            this.create.emit();
            this.toastrService.success("Se agrego el cuarto " + cuartoCreado.nombre);
          }, error2 => {
            this.toastrService.error(error2, "Registro Cuarto")
          });
        }
      }
    }, error1 => {
      this.toastrService.error(error1, "Registro")
    });
  }

  procesarServiciosIncluidos() {
    if (!this.stringIsEmpty(this.serviciosIncluidos)) {
      let serviciosList: string[] = this.serviciosIncluidos.split(",");
      for (let i = 0; i < serviciosList.length; i++) {
        serviciosList[i] = serviciosList[i].trim()
      }
      this.vivienda.serviciosIncluidos = serviciosList;
    }

  }

  stringIsEmpty(str: string): boolean {
    if (!str || str.length === 0) {
      return true;
    }
    return false;
  }

  nuevoFormCuarto() {
    this.cuartos.push(new Cuarto("", "", null))
  }

  cancelCreation() {
    this.cancel.emit();
  }

  ngOnInit() {
    this.vivienda = new Vivienda();
    this.cuartos = [];
  }

}
