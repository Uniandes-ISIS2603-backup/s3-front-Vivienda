export class Vivienda {
  private imgUrl: string;
  private nombre: string;
  private ciudad: string;
  private direccion: string;
  private calificacion: number;
  private costoInferior: number;
  private costoSuperior: number;


  constructor(imgUrl: string, nombre: string, ciudad: string, direccion : string, calificacion: number, costoInferior: number, costoSuperior: number) {
    this.imgUrl = imgUrl;
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.direccion = direccion;
    this.calificacion = calificacion;
    this.costoInferior = costoInferior;
    this.costoSuperior = costoSuperior;
  }

  getImgUrl(): string {
    return this.imgUrl;
  }

  getNombre(): string {
    return this.nombre;
  }

  getCiudad(): string {
    return this.ciudad;
  }

  getDireccion(): string {
    return this.direccion
  }

  getCalificacion(): number {
    return this.calificacion;
  }

  getCostoInferior(): number {
    return this.costoInferior;
  }

  getCostoSuperior(): number {
    return this.costoSuperior;
  }
}
