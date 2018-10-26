import {Component, OnInit} from '@angular/core';
import {EstudianteService} from '../estudiante.service';
import {Estudiante} from '../estudiante';

@Component({
  selector: 'estudiante-list',
  templateUrl: './estudiante-list.component.html'
})
export class EstudianteListComponent implements OnInit {
  constructor(private estudianteService: EstudianteService) {
  }

  estudiantes: Estudiante[];

  getEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(pp => this.estudiantes = pp);
  }

  ngOnInit() {
    this.getEstudiantes();
  }
}
