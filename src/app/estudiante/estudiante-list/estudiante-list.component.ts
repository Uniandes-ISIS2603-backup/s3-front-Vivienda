import {Component, OnInit} from '@angular/core';
import {EstudianteService} from '../estudiante.service';
import {Estudiante} from '../estudiante';

@Component({
  selector: 'estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']

})
export class EstudianteListComponent implements OnInit {

  /**
   * The component's constructor
   * @param estudianteService The student's service provider
   */
  constructor(private estudianteService: EstudianteService) {
  }

  /**
   * List of all the students in UniVivienda
   */
  estudiantes: Estudiante[];

  /**
   * Retrieves all the students in UniVivienda
   */
  getEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(pp => this.estudiantes = pp);
  }

  /**
   * Initializes the component
   */
  ngOnInit() {
    this.getEstudiantes();
  }
}
