import {Component, OnInit} from "@angular/core";
import {ViviendaService} from "../vivienda.service";
import {Vivienda} from "../vivienda";
import {forEach} from "../../../../node_modules/@angular/router/src/utils/collection";

@Component({
  selector: 'vivienda-list',
  templateUrl: './vivienda-list.component.html',
  styleUrls: ['./vivienda-list.component.css']
})
export class ViviendaListComponent implements OnInit{
  constructor(private viviendaService: ViviendaService){}

  viviendas: Vivienda[];

  getViviendas(): Vivienda[]{
    return this.viviendaService.getViviendas();
  }

  ngOnInit() {
    this.viviendas = this.getViviendas();
    console.log("viviendaComponent")
    this.viviendas.forEach(function (viv) {
      console.log(viv.getNombre());
      console.log(viv.getCiudad());
      console.log(viv.getDireccion());
    })
  }

}
