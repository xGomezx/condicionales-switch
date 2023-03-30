//pedimos el producto, no convertimos porque 
//el producto es un string

let producto = prompt("Ingrese un producto");
//se compara la cadena ingreseda
if(producto == "arroz" || producto == "Arroz"){
    console.log("El producto no paga iva")
};
if(producto == "lentejas" || producto == "Lentejas"){
    console.log("El producto no paga iva")
};
if(producto == "crema" || producto == "Crema"){
    console.log("El producto si paga iva")
};
if(producto == "vino" || producto == "Vino"){
    console.log("El producto si paga iva")
};