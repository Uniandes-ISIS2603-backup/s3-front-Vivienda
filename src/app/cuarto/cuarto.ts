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
   * Indica si el cuarto esta ocupado o no
   */
  ocupado: boolean;

    
  /**
   * Constructor de la clase
   * @param nombre - Nombre del cuarto
   * @param descripcion - Descripcion del cuarto
   * @param costo - Costo del arriendo del cuarto
   */
  constructor(nombre: string=null, descripcion: string=null, costo: number=null, ocupado: boolean=null) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.costoArriendo = costo;
    this.ocupado = ocupado;
  }


}
