import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../log-in/user.service';

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
    constructor(private route: ActivatedRoute, private router: Router, private authService: UserService) { }


    terminarRegistro(role: string = null, idRegistrado = {id:null}):void{
        if (role != null)
            this.authService.login(role, idRegistrado['id']);
        else
            this.router.navigate(["/viviendas/list"]);
    }
      /**
       * Initializes the component
       */
    ngOnInit() {
        this.soyEstudiante = true;
    }

}
