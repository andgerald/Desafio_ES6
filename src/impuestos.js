//se crea la clase impuestos
class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  set montoBrutoAnual(nuevoMontoBrutoAnual) {
    return (this._montoBrutoAnual = nuevoMontoBrutoAnual);
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(nuevoDeducciones) {
    return (this._deducciones = nuevoDeducciones);
  }
}

export default Impuestos;
