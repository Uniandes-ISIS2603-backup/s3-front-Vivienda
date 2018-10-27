export class SitioInteres {
  id: number;

  nombre: string;

  descripccion: string;

  imgUrl: string;

  constructor(id: number, nombre: string, descripcion: string, imgUrl: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripccion = descripcion;
    this.imgUrl = imgUrl;
  }

  getId() {
    return this.id;
  }

  getNombre() {
    return this.nombre;
  }

  getDescripccion() {
    return this.descripccion;
  }

  getImgUrl() {
    return this.imgUrl;
  }

}
