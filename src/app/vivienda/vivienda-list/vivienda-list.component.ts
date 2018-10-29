import {Component, OnInit} from "@angular/core";
import {ViviendaService} from "../vivienda.service";
import {Vivienda} from "../vivienda";
import {forEach} from "../../../../node_modules/@angular/router/src/utils/collection";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'vivienda-list',
  templateUrl: './vivienda-list.component.html',
  styleUrls: ['./vivienda-list.component.css']
})
export class ViviendaListComponent implements OnInit{
  constructor(private viviendaService: ViviendaService, private route: ActivatedRoute){}

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
