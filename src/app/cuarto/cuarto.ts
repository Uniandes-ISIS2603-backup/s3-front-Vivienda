export class Cuarto {
  nombre: string;
  descripcion: string;
  costo: number;

  constructor(nombre: string, descripcion: string, costo: number) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.costo = costo;
  }

  setCosto(sCosto: string) {
    this.costo = Number.parseFloat(sCosto);
  }

}
