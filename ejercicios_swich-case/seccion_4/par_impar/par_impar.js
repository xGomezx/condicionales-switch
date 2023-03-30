let num = parseFloat(prompt("Ingrese el numero que desee"));

let par = num%2 == 0;
switch (par) {
    case true:
        console.log("El numero es par");
        break;

    default:
        console.log("El numero no es par");
        break;
}