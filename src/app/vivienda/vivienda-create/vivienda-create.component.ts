import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Vivienda} from "../vivienda";
import {ViviendaService} from "../vivienda.service";
import {ToastrService} from "ngx-toastr";
import {Cuarto} from "../../cuarto/cuarto";
import {CuartoService} from "../../cuarto/cuarto.service";
import {isEmpty} from "rxjs/operators";
import {and} from "../../../../node_modules/@angular/router/src/utils/collection";

// Componente usado para crear un vivienda y sus cuartos
@Component({
  selector: 'app-vivienda-create',
  templateUrl: './vivienda-create.component.html',
  styleUrls: ['./vivienda-create.component.css']
})
export class ViviendaCreateComponent implements OnInit {

  //La vivienda
  vivienda: Vivienda;
  //Los cuartos
  cuartos: Cuarto[];
  //String temporal de servicios incluidos
  serviciosIncluidos: string;

  constructor(private viviendaService: ViviendaService,
              private cuartosService: CuartoService,
              private toastrService: ToastrService) {
  }

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

//Metodo que se llama al hacer submit
  crearVivienda() {
    //Crea una lista de servicios a partir del string de servicios incluidos
    this.procesarServiciosIncluidos();
    //Manda el post request de la vivienda
    this.viviendaService.createVivienda(this.vivienda).subscribe((viviendaCreada: Vivienda) => {
      this.create.emit();
      this.toastrService.success("Se registro la vivienda", "Registro");
      for (let i = 0; i < this.cuartos.length; i++) {
        //Al crear la vivienda recorre sus cuartos y realiza un post request por cada uno si son validos
        let cuarto: Cuarto = this.cuartos[i];
        if (!this.stringIsEmpty(cuarto.nombre) && cuarto.costoArriendo) {
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

  //Se separa el string de servicios en una lista de strings
  procesarServiciosIncluidos() {
    if (!this.stringIsEmpty(this.serviciosIncluidos)) {
      let serviciosList: string[] = this.serviciosIncluidos.split(",");
      for (let i = 0; i < serviciosList.length; i++) {
        serviciosList[i] = serviciosList[i].trim()
      }
      this.vivienda.serviciosIncluidos = serviciosList;
    }

  }

  //Revisa si un string es valido
  stringIsEmpty(str: string): boolean {
    if (!str || str.length === 0) {
      return true;
    }
    return false;
  }

  //Crea una serie de inputs para un cuarto adicional
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
