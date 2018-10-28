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

  getViviendas(): void{
    this.viviendaService.getViviendas().subscribe(viviendas=>{
        this.viviendas = viviendas;
    });
  }

  ngOnInit() 
  {
      this.getViviendas();
  }

}
