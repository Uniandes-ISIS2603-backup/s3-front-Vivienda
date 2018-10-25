import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {EstudianteService} from '../estudiante.service'
import {Estudiante} from '../estudiante'

@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css']
})
export class EstudianteDetailComponent implements OnInit {

  constructor(private estudianteService: EstudianteService,
              private route: ActivatedRoute) {}

  estudiante_id : number;
  estudiante : Estudiante;
  
  getEstudiante(): void {
      this.estudianteService.getEstudiante(this.estudiante_id)
            .subscribe(estudiante => {
                this.estudiante = estudiante;
      })
  }
  
  ngOnInit() {
      this.estudiante_id = +this.route.snapshot.paramMap.get('id');
      this.estudiante = new Estudiante();
      this.getEstudiante();
  }

}
