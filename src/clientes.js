//se crea la clase cliente
class Cliente {
  constructor(nombre, impuestos) {
    this._nombre = () => {
      return nombre;
    };
    this._impuestos = () => {
      return impuestos;
    };
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevonombre) {
    return (this._nombre = () => {
      return nuevonombre;
    });
  }

  calcularImpuesto() {
    //se valida si el monto de las deducciones es mayor que monto bruto arroge un  mensaje
    if (this._impuestos()._deducciones > this._impuestos()._montoBrutoAnual) {
      return "Queda exonerado de Impuestos Anuales";
    }
    return `El cliente ${this.nombre()} debe pagar un total de $${
      (this._impuestos()._montoBrutoAnual - this._impuestos()._deducciones) *
      0.21
    }`;
  }
}
export default Cliente;
