import {Component, OnInit, Input} from '@angular/core';
import {SitioInteres} from '../../sitio-interes/sitioInteres';
import {ViviendaDetail} from '../vivienda-detail';

@Component({
  selector: 'app-vivienda-sitios-interes',
  templateUrl: './vivienda-sitios-interes.component.html',
  styleUrls: ['./vivienda-sitios-interes.component.css']
})
export class ViviendaSitiosInteresComponent implements OnInit {
  @Input() viviendaSitioInteres: SitioInteres [];
  @Input()  viviendaDetail: ViviendaDetail;
  @Input()  puedeEditar: boolean;
  public isCollapsed = true;

  ngOnInit() {
  }

}
