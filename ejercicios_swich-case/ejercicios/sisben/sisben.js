//crear un programa que reciba el 
//sisben de un usuario y muestre si este tiene derecho a un subsidio o no.
//si el usuario es 1,2 o 3, el usuario tiene derecho a subsidio

let sisben = parseInt(prompt("Ingrese sisben"));

switch (sisben) {
    case 1:
        console.log("Ud tiene derecho a subsidio");
        break;
    case 2:
        console.log("Ud tiene derecho a subsidio");
        break;
    case 3:
        console.log("Ud tiene derecho a subsidio");
        break;
    default:
        console.log("Ud no tiene derecho a subsidio");
        break;
}