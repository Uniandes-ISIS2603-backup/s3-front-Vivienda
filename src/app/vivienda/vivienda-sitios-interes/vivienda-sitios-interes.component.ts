import {Component, OnInit, Input} from '@angular/core';
import {SitioInteres} from '../sitioInteres';

@Component({
  selector: 'app-vivienda-sitios-interes',
  templateUrl: './vivienda-sitios-interes.component.html',
  styleUrls: ['./vivienda-sitios-interes.component.css']
})
export class ViviendaSitiosInteresComponent implements OnInit {
  @Input() viviendaSitioInteres: SitioInteres [];
  @Input() viviendaId: string;
  public isCollapsed = true;

  ngOnInit() {
  }

}
