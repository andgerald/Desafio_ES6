class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevonombre) {
    return (this._nombre = nuevonombre);
  }

  get impuesto() {
    return this._impuesto;
  }

  calcularImpuesto(montoBrutoAnual, deducciones) {
    return (montoBrutoAnual - deducciones) * 1.21;
  }
}
export default Cliente;
