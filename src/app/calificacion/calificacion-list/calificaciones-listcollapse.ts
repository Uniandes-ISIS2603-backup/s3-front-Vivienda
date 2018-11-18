import {OnInit, Input} from '@angular/core';
import {Calificacion} from '../calificacion';

export class CalificacionListCollapseComponent implements OnInit {

  /**
   * List of calificacions to show
   */
  @Input() calificaciones: Calificacion[];

  calificacionesFiltradas: Calificacion[];

  fPuntajeMin = 0;
  fPuntajeMax = 5;

  puntSort = '';

  /**
   * Boolean attribute modeling the collapse button
   */
  public isCollapsed = true;


  compPuntaje(a: Calificacion, b: Calificacion): number {
    if (a.puntaje === b.puntaje) {

    } else {
      return (a.puntaje < b.puntaje) ? -1 : 1;

    }
  }

  puntajeSort() {
    this.calificacionesFiltradas = (this.puntSort !== '') ? this.calificacionesFiltradas.reverse() :
      this.calificacionesFiltradas.sort(this.compPuntaje);
    this.puntSort = (this.puntSort === '(asc)') ? '(des)' : '(asc)';
  }

  verificarMin(): boolean {
    if (this.fPuntajeMax < this.fPuntajeMin)
      this.fPuntajeMin = this.fPuntajeMax;
    return true;
  }

  verificarMax(): boolean {
    if (this.fPuntajeMax < this.fPuntajeMin)
      this.fPuntajeMin = this.fPuntajeMax - 0.1;
    return true;
  }

  /**
   * Initializes the component
   */
  ngOnInit() {
    this.calificacionesFiltradas = this.calificaciones;
  }
}
