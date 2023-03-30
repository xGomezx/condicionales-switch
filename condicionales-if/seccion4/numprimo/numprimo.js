let num = parseFloat(prompt("Ingrese un numero entre el 1 y el 15"));

if (num > 15 ){
    console.log("Tienes que ingresar un numero menor que 15")
}
else{
    if (num==2 || num==3 || num==5 || num==7 || num==13){
        console.log("el numero es primo")
    }
    else{
        console.log("El numero no es primo")
    }
};