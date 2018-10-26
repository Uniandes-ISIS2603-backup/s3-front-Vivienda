export class Contrato {

  id: number;

  fechaInicio: Date;

  fechaFin: Date;

  modoPago: number;

  getFechaInicio(): Date {
    return this.fechaInicio;
  }

  getFechaFin(): Date {
    return this.fechaFin;
  }

  getModoPago(): number {
    return this.modoPago;
  }
}
