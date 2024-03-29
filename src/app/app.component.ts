import {Component, EventEmitter, OnInit, Output} from '@angular/core';


import {ViviendaService} from './vivienda/vivienda.service';
import {EstudianteService} from './estudiante/estudiante.service';
import {ArrendadorService} from './arrendador/arrendador.service';
import {UniversidadService} from './universidad/universidad.service';
import {SitioInteresService} from './sitio-interes/sitioInteres.service';
import {Vivienda} from './vivienda/vivienda';
import { UserService } from './log-in/user.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ContratoService} from './contrato/contrato.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 's3-front-Vivienda';

  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();

  constructor(private viviendaService: ViviendaService,
              private estudiantesService: EstudianteService,
              private arrendadorService: ArrendadorService,
              private universidadService: UniversidadService,
              private sitioInteresService: SitioInteresService,
              private contratoService: ContratoService,
              private toastrService: ToastrService,
              private router: Router,
              private authService: UserService
  ) {

  }


  // Genera datos de prueba para todos los recursos de la aplicacion
  generarDatos() {
    this.viviendaService.generarDatos().subscribe(() => {
      this.create.emit();
      this.toastrService.success('Se generaron datos para las viviendas', 'Resultado');
      
      this.estudiantesService.generarDatos().subscribe(() => {
        this.create.emit();
        this.toastrService.success('Se generaron datos para los estudiantes y las calificaciones', 'Resultado');
        
        this.arrendadorService.generarDatos().subscribe(() => {
          this.create.emit();
          this.toastrService.success('Se generaron datos para los arrendadores', 'Resultado');
          
          this.sitioInteresService.generarDatos().subscribe(() => {
            this.create.emit();
            this.toastrService.success('Se generaron datos para los Sitios de Interes', 'Resultado');

            this.contratoService.generarDatos().subscribe( () => {
              this.create.emit();
              this.toastrService.success('Se generaron datos para los Contratos', 'Resultado');
            }, error1 => {
              this.toastrService.error('No se pudieron generar datos para los contratos');
            });
            
            this.universidadService.generarDatos().subscribe(() => {
            this.create.emit();
            this.toastrService.success('Se generaron datos para las Universidades', 'Resultado');

            this.toastrService.success('Actualice la página para ver los cambios', 'Datos Generados');
          }, error1 => {
            this.toastrService.error('No se pudieron generar datos de universidades', 'Resultado');
          });
        }, error1 => {
          this.toastrService.error('No se pudieron generar datos de sitios de interes', 'Resultado');
        });
      }, error1 => {
        this.toastrService.error('No se pudieron generar datos de arrendadores', 'Resultado');
      });
    }, error1 => {
      this.toastrService.error('No se pudieron generar datos de estudiantes y calificaciones', 'Resultado');
    });
    }, error1 => {
        this.toastrService.error('No se pudieron generar datos de viviendas', 'Resultado');
      });
  }
    
  
    logOut():void{
        this.authService.logout();
    }
    
    irCuenta():void{
        if (localStorage.getItem('role') == 'ESTUDIANTE')
            this.router.navigate(['/estudiante/'+localStorage.getItem('id')]);
        else
            this.router.navigate(['/arrendadores/'+localStorage.getItem('id')]);
    }
    
  ngOnInit(): void {
      this.authService.start();
  }


}

