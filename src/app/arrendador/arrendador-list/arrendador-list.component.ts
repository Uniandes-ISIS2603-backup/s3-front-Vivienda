import { Component, OnInit } from '@angular/core';
import { ArrendadorService } from "../arrendador.service";
import { Arrendador } from "../arrendador";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-arrendador-list',
  templateUrl: './arrendador-list.component.html',
  styleUrls: ['./arrendador-list.component.css']
})
export class ArrendadorListComponent implements OnInit {

  constructor(private arrendadorService: ArrendadorService, route: ActivatedRoute) { }
  
  arrendadores: Arrendador[];

  getArrendadores(): void
  {
      this.arrendadorService.getArrendadores().subscribe( arrendadores => {
          this.arrendadores = arrendadores;
          console.log(this.arrendadores);
      })
  }
  ngOnInit() 
  {
      this.getArrendadores();
  }

}
