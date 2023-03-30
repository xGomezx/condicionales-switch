let frase = prompt("Ingrese la frase que quiera");

let adso = frase.includes("ADSO");
let desarrollador = frase.includes("desarrollador");

if (adso && desarrollador){
    console.log("La frase incluye las palabas 'ADSO' y 'desarrollador'" );
}
else{
    console.log("La frase no incluye las palabras 'ADSO' y 'desarrollador'")
};