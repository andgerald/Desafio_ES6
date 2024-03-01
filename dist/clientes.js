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
  function Cliente(nombre) {
    _classCallCheck(this, Cliente);
    this._nombre = nombre;
  }
  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevonombre) {
      return this._nombre = nuevonombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(montoBrutoAnual, deducciones) {
      return (montoBrutoAnual - deducciones) * 1.21;
    }
  }]);
  return Cliente;
}();
var _default = Cliente;
exports["default"] = _default;