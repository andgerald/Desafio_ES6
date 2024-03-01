// index.js
import Cliente from "./clientes.js";
import Impuestos from "./impuestos.js";

// Ejemplo de uso
const impuestosCliente = new Impuestos(20000, 5000);
const cliente = new Cliente("Juan");
const calculo = cliente.calcularImpuesto(
  impuestosCliente.montoBrutoAnual,
  impuestosCliente.deducciones
);

console.log(`Cliente: ${cliente.nombre}`);
console.log(`Impuesto a pagar: ${calculo}`);
