import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

    /**
     * Boolean attribute modeling the button to register a student or a householder
     */
    soyEstudiante: boolean;

    /**
     * The constructor for the component
     * @param route The route
     */
    constructor(private route: ActivatedRoute) { }

      /**
       * Initializes the component
       */
    ngOnInit() {
        this.soyEstudiante = true;
    }

}
