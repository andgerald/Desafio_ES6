//se crea la clase impuestos
class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    // se valida que el valor ingresado sea un numero y que sea mayor o igual a 0
    if (
      !isNaN(montoBrutoAnual) &&
      !isNaN(deducciones) &&
      montoBrutoAnual >= 0 &&
      deducciones >= 0
    ) {
      this._montoBrutoAnual = montoBrutoAnual;
      this._deducciones = deducciones;
    } else {
      console.log(
        "El monto bruto anual y deducciones deben ser valores numéricos positivos."
      );
    }
    //se valida si el monto de las deducciones es mayor que monto bruto arroge un  mensaje
    if (deducciones > montoBrutoAnual) {
      console.log("Queda exonerado de Impuestos Anuales");
    }
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
