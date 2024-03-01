"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// importacion de cliente e impuestos

//instanciamos impuestos
var impuestosClienteExito = new _impuestos["default"](20000, 5000);

//instanciamos cliente
var cliente = new _clientes["default"]("Juan");

//creamos una constante para almacenar el valor del calculo de impuesto
var calculo = cliente.calcularImpuesto(impuestosClienteExito._montoBrutoAnual, impuestosClienteExito._deducciones);

//creamos nueva instancia en donde el valor de la deduccion es  un valor negativo
//nos deberia arrojar "El monto bruto anual y deducciones deben ser valores numéricos positivos.""
new _impuestos["default"](20000, -5000);

//creamos nueva instancia en donde el valor de la deduccion es mayor que el monto bruto
//nos deberia arrojar "Queda exonerado de Impuestos Anuales""
new _impuestos["default"](20000, 500000);

//visualizamos al cliente con los impuestos
console.log(cliente, impuestosClienteExito);

//caso exitoso donde nos muestra el calculo de calcularImpuesto
console.log("Cliente: ".concat(cliente._nombre, " debe pagar $ ").concat(calculo, " de impuestos"));