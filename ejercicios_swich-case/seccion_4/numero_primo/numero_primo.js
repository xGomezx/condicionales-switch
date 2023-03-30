let numero = parseFloat(prompt("Ingrese un numero entre 1 y 15"));

let resultado = numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13;

switch (resultado) {
    case true:
        console.log("El numero es primo ");
        break;

    default:
        console.log("El numero no es primo");
        break;
}