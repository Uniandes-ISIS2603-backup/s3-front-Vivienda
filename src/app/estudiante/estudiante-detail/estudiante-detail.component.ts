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

    /**
     * The constructor of the component
     * @param estudianteService The students' service provider
     * @param route The route
     */
    constructor(private estudianteService: EstudianteService,
                private route: ActivatedRoute) {}
                
    /**
     * The student's id number
     */
    estudiante_id : number;
    
    /**
     * The student
     */
    estudiante : Estudiante;

    /**
     * Retrives the student
     */
    getEstudiante(): void {
        this.estudianteService.getEstudiante(this.estudiante_id)
              .subscribe(estudiante => {
                  this.estudiante = estudiante;
        })
    }
    
    /**
     * Initializes the component
     */
    ngOnInit() {
        this.estudiante = new Estudiante();
        this.estudiante_id = +this.route.snapshot.paramMap.get('id');
        this.getEstudiante();
    }

}
