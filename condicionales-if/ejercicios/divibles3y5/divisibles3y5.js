let num1 = parseInt(prompt("Ingrese el numero que quiere saber si es divisible entre 3"));

let div3 = num1%3 == 0;
let div5 = num1%5 == 0;

if(div3 && div5){
    console.log("El numeros es divisibles entre 3 y 5")
}
else{
    console.log("El numero no es divisible entre alguno de los numeros osea 3 y 5")
};