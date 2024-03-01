//se crea la clase cliente
class Cliente {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevonombre) {
    return (this._nombre = nuevonombre);
  }

  calcularImpuesto(montoBrutoAnual, deducciones) {
    return (montoBrutoAnual - deducciones) * 1.21;
  }
}
export default Cliente;
