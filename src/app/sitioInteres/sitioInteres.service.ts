import {Injectable} from '@angular/core';
import {SitioInteres} from './sitioInteres';


@Injectable()
export class SitioInteresService {
  sitiosInteres: SitioInteres[];

  constructor() {
  }

  getSitiosInteres(): SitioInteres[] {
    this.sitiosInteres = [];
    for (let i = 0; i < 3; i++) {
      const id = Math.random() * 10;
      const nombre = 'Sitio Interes ' + (i + 1);
      const descripcion = 'Ipsum bibendum lectus egestas cursus lacinia mi ullamcorper natoque dictumst. ' +
        'Blandit at varius penatibus diam senectus.Molestie vestibulum proin mauris cras cras tempus et ' +
        'facilisi congue suspendisse a nascetur.';
      const img = 'assets/img/sitioInteres' + (i + 1) + '.jpg';
      const sitioInteres = new SitioInteres(id, nombre, descripcion, img);
      this.sitiosInteres.push(sitioInteres);
    }
    return this.sitiosInteres;
  }

}
