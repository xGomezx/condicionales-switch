let edad = parseInt(prompt("Ingrese su edad"));
let mayorEdad = edad >= 18;


switch (mayorEdad) {
    case true:
        console.log("Ud es mayor de edad")
        break;

    default:
        console.log("Ud no es mayor de edad")
        break;
}