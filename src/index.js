// importacion de cliente e impuestos
import Cliente from "./clientes.js";
import Impuestos from "./impuestos.js";

// Declaración de variables
let impuestos;
let cliente;
let nombre = "Patricio";

// caso uno : debe pasar las validaciones
let montoBruto1 = 50000;
let montoDeduccion1 = 222;

// caso dos : debe pasar las validaciones
let montoBruto2 = -60;
let montoDeduccion2 = 290;

//caso tres :
let montoBruto3 = 5660;
let montoDeduccion3 = -290;

// caso cuatro:
let montoBruto4 = 576;
let montoDeduccion4 = 5290;

function validacion(montoBrutoAnual, deducciones) {
  if (isNaN(montoBrutoAnual) || montoBrutoAnual < 0) {
    console.log("El montoBrutoAnual debe ser un número positivo");
  } else if (isNaN(deducciones) || deducciones < 0) {
    console.log("El deducciones debe ser un número positivo");
  } else {
    impuestos = new Impuestos(montoBrutoAnual, deducciones);
    cliente = new Cliente(nombre, impuestos);
    cliente.nombre = "Claudia";
    console.log(cliente.calcularImpuesto());
  }
}
validacion(montoBruto1, montoDeduccion1);
validacion(montoBruto2, montoDeduccion2);
validacion(montoBruto3, montoDeduccion3);
validacion(montoBruto4, montoDeduccion4);
