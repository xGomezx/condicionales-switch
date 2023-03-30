console.log("Escoja alguna de las opciones que desee");
console.log("1: saludar");
console.log("2: despedir");
console.log("3: sumar dos numeros");

let opcion = parseInt(prompt("Selecciona la opcion que desees"));

switch (opcion) {
    case 1:
        console.log("Hola, Bienvenido");
    break;

    case 2:
        console.log("Adios, que tengas buen dia");
    break;

    case 3:
        let num1 = parseInt(prompt("Ingrese el primer numero"));
        let num2 = parseInt(prompt("Ingrese el segundo numero"));
        let suma = num1 + num2;
        console.log("la suma de los dos numeros es de:", suma)
    break;

    default:
        console.log("Opcion no valida")
    break;
}