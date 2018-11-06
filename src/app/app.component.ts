import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ViviendaService} from './vivienda/vivienda.service';
import {EstudianteService} from './estudiante/estudiante.service';
import {Vivienda} from './vivienda/vivienda';
import {ToastrService} from 'ngx-toastr';

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
              private toastrService: ToastrService
  ) {

  }


  //Genera datos de prueba para todos los recursos de la aplicacion
  generarDatos() {
    this.viviendaService.generarDatos().subscribe(() => {
      this.create.emit();
      this.toastrService.success('Se generaron datos para las viviendas', 'Resultado');
      alert('');
    }, error1 => {
      this.toastrService.error('No se pudieron generar datos', 'resultado');
      alert('');
    });

    this.estudiantesService.generarDatos().subscribe(() => {
      this.create.emit();
      this.toastrService.success('Se generaron datos para los estudiantes', 'Resultado');
      alert('');
    }, error1 => {
      this.toastrService.error('No se pudieron generar datos', 'resultado');
      alert('');
    });
  }

  ngOnInit(): void {
  }


}

