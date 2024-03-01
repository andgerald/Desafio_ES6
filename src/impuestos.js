class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    if (montoBrutoAnual >= 0 && deducciones >= 0) {
      this._montoBrutoAnual = montoBrutoAnual;
      this.deducciones = deducciones;
    } else {
      return console.log("El monto bruto anual debe ser un valor positivo.");
    }
    if (deducciones > montoBrutoAnual) {
      return console.log("Queda exonerado de Impuestos Anuales");
    }
  }

  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  //   set montoBrutoAnual(nuevoMontoBrutoAnual) {
  //     return (this._montoBrutoAnual = nuevoMontoBrutoAnual);
  //   }

  set montoBrutoAnual(monto) {
    if (monto >= 0) {
      this.montoBrutoAnual = monto;
    } else {
      console.log("El monto bruto anual debe ser un valor positivo.");
    }
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(nuevoDeducciones) {
    return (this._deducciones = nuevoDeducciones);
  }

  //   set Deducciones(deduccion) {
  //     if (deducciones >= 0) {
  //       this.deducciones = deducciones;
  //     } else {
  //       console.log("Las deducciones deben ser un valor positivo.");
  //     }
  //   }
}

export default Impuestos;
