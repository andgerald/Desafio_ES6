// importacion de cliente e impuestos
import Cliente from "./clientes.js";
import Impuestos from "./impuestos.js";

//instanciamos impuestos
const impuestosClienteExito = new Impuestos(20000, 5000);

//instanciamos cliente
const cliente = new Cliente("Juan");

//creamos una constante para almacenar el valor del calculo de impuesto
const calculo = cliente.calcularImpuesto(
  impuestosClienteExito._montoBrutoAnual,
  impuestosClienteExito._deducciones
);

//creamos nueva instancia en donde el valor de la deduccion es  un valor negativo
//nos deberia arrojar "El monto bruto anual y deducciones deben ser valores numéricos positivos.""
new Impuestos(20000, -5000);

//creamos nueva instancia en donde el valor de la deduccion es mayor que el monto bruto
//nos deberia arrojar "Queda exonerado de Impuestos Anuales""
new Impuestos(20000, 500000);

//visualizamos al cliente con los impuestos
console.log(cliente, impuestosClienteExito);

//caso exitoso donde nos muestra el calculo de calcularImpuesto
console.log(`Cliente: ${cliente._nombre} debe pagar $ ${calculo} de impuestos`);
