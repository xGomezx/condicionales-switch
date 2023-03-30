let password = prompt("Ingrese su contraseña");

let menos = password.length >= 8;
let mas = password.length <= 15;
let espacio = password.includes(" ");

if(menos && mas && espacio == true){
    console.log("La contraseña es valida: ", password)
}
else{ 
    console.log("La contraseña es invalida, tiene que estar entre 8 y 15 caracteres y contener un espacio")
}
