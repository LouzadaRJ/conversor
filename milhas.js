import entradaDados from 'readline-sync';

console.log("Conversor de milhas para Quilômetros: \n");

let mi = entradaDados.question("Informe o valor de milhas: ");
let km = mi / 0.62137;

console.log(mi+"mi equivalente a "+km+"km");