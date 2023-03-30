let num = parseFloat(prompt("Ingrese el numero que desee"));
let resultado = num%5 == 0

switch (resultado) {
    case true:
        console.log("El numero es divisibe entre 5");
        break;

    default:
        console.log("El numero no es divisible entre 5");
        break;
}