import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  soyEstudiante: boolean;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.soyEstudiante = true;
  }

}
