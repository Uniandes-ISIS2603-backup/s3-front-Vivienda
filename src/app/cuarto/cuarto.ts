export class Cuarto {

  /**
   * Identificador del cuarto
   */
  id: number;

  /**
   * Nombre del cuarto
   */
  nombre: string;

  /**
   * Descripcion del cuarto
   */
  descripcion: string;

  /**
   * Costo de arriendo del cuarto
   */
  costoArriendo: number;

  /**
   * Constructor de la clase
   * @param nombre - Nombre del cuarto
   * @param descripcion - Descripcion del cuarto
   * @param costo - Costo del arriendo del cuarto
   */
  constructor(nombre: string, descripcion: string, costo: number) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.costoArriendo = costo;
  }


}
