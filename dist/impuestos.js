"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//se crea la clase impuestos
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);
    // se valida que el valor ingresado sea un numero y que sea mayor o igual a 0
    if (!isNaN(montoBrutoAnual) && !isNaN(deducciones) && montoBrutoAnual >= 0 && deducciones >= 0) {
      this._montoBrutoAnual = montoBrutoAnual;
      this._deducciones = deducciones;
    } else {
      console.log("El monto bruto anual y deducciones deben ser valores numéricos positivos.");
    }
    //se valida si el monto de las deducciones es mayor que monto bruto arroge un  mensaje
    if (deducciones > montoBrutoAnual) {
      console.log("Queda exonerado de Impuestos Anuales");
    }
  }
  _createClass(Impuestos, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    },
    set: function set(nuevoMontoBrutoAnual) {
      return this._montoBrutoAnual = nuevoMontoBrutoAnual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nuevoDeducciones) {
      return this._deducciones = nuevoDeducciones;
    }
  }]);
  return Impuestos;
}();
var _default = Impuestos;
exports["default"] = _default;