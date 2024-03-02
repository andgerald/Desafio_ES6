"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//se crea la clase cliente
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuestos) {
    _classCallCheck(this, Cliente);
    this._nombre = function () {
      return nombre;
    };
    this._impuestos = function () {
      return impuestos;
    };
  }
  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevonombre) {
      return this._nombre = function () {
        return nuevonombre;
      };
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      //se valida si el monto de las deducciones es mayor que monto bruto arroge un  mensaje
      if (this._impuestos()._deducciones > this._impuestos()._montoBrutoAnual) {
        return "Queda exonerado de Impuestos Anuales";
      }
      return "El cliente ".concat(this.nombre(), " debe pagar un total de $").concat((this._impuestos()._montoBrutoAnual - this._impuestos()._deducciones) * 0.21);
    }
  }]);
  return Cliente;
}();
var _default = Cliente;
exports["default"] = _default;