let angulo1 = parseFloat(prompt("Ingrese el valor del primer angulo"));
let angulo2 = parseFloat(prompt("Ingrese el valor del segundo angulo"));
let angulo3 = parseFloat(prompt("Ingrese el valor del tercer angulo"));
 
let resultado = angulo1+angulo2+angulo3;

if(resultado == 180){
    console.log("Los tres angulos si corresponden al de un circulo")
}
else{
    console.log("Alguno de los angulos o todos los angulos no pertenecen a un triangulo")
};
