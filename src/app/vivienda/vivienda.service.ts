import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vivienda} from "./vivienda";
import * as faker from "faker";
import * as fakerEs from "faker/locale/es"

@Injectable()
export class ViviendaService {
  constructor(private http: HttpClient) {
  }

  getViviendas(): Vivienda[] {
    let viviendas: Vivienda[] = new Array();
    for (let i = 0; i < 10; i++) {
      let img = "assets/img/vivienda" + (i + 1) + ".jpg";
      let calificacion = 3 + Math.round(Math.random() * 20)/10;
      let nombre = "Vivienda " + i;
      let ciudad = faker.address.city();
      let direccion = faker.address.streetAddress();
      let costoInferior = Math.round(((Math.random() * 2000000) + 1000000)/100000)*100000;
      let costoSuperior = Math.round(((Math.random() * 500000) + costoInferior)/100000)*100000;
      let viv = new Vivienda(img, nombre, ciudad, direccion, calificacion, costoInferior, costoSuperior);
      viviendas.push(viv);
    }
    return viviendas;
  }
}
