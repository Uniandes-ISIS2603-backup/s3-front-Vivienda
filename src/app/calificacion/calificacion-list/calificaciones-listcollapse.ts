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

  listaDe: String;

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
  
  compararString(s1_p: string, s2_p:string): boolean{
    let ss1: string[] = s1_p.toLowerCase().split(" ");
    let ss2: string[] = s2_p.toLowerCase().split(" ");

    for (let s1 of ss1)
        for (let s2 of ss2)
            if (s1.startsWith(s2))
                  return true;
    return false;
  }
  
    copyCalificacion(calificacion:Calificacion):Calificacion{
        if (this.listaDe == 'estudiante')
            return JSON.parse(JSON.stringify(calificacion));
        return null;
    }

  /**
   * Initializes the component
   */
  ngOnInit() {
    this.calificacionesFiltradas = this.calificaciones;
  }
}
