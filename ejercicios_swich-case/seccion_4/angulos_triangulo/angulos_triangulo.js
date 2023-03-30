let angulo1 = parseFloat(prompt("Ingrese el valor del primer angulo"));
let angulo2 = parseFloat(prompt("Ingrese el valor del segundo angulo"));
let angulo3 = parseFloat(prompt("Ingrese el valor del tercer angulo"));

let triangulo = angulo1+angulo2+angulo3 == 180;

switch (triangulo) {
    case true:
        console.log("Los tres angulos pertenecen a un triangulo");
        break;

    default:
        console.log("Alguno o todos los angulos no pertenecen al de un triangulo");
        break;
}

