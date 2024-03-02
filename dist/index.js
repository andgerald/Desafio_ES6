"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// importacion de cliente e impuestos

// Declaración de variables
var impuestos;
var cliente;
var nombre = "Patricio";

// caso uno : debe pasar las validaciones
var montoBruto1 = 50000;
var montoDeduccion1 = 222;

// caso dos : debe pasar las validaciones
var montoBruto2 = -60;
var montoDeduccion2 = 290;

//caso tres :
var montoBruto3 = 5660;
var montoDeduccion3 = -290;

// caso cuatro:
var montoBruto4 = 576;
var montoDeduccion4 = 5290;
function validacion(montoBrutoAnual, deducciones) {
  if (isNaN(montoBrutoAnual) || montoBrutoAnual < 0) {
    console.log("El montoBrutoAnual debe ser un número positivo");
  } else if (isNaN(deducciones) || deducciones < 0) {
    console.log("El deducciones debe ser un número positivo");
  } else {
    impuestos = new _impuestos["default"](montoBrutoAnual, deducciones);
    cliente = new _clientes["default"](nombre, impuestos);
    cliente.nombre = "Claudia";
    console.log(cliente.calcularImpuesto());
  }
}
validacion(montoBruto1, montoDeduccion1);
validacion(montoBruto2, montoDeduccion2);
validacion(montoBruto3, montoDeduccion3);
validacion(montoBruto4, montoDeduccion4);