let contraseña = prompt("Ingrese su contraseña");
let correo = prompt("Ingrese su correo");

console.log("elija alguna de las opciones");
console.log("1: editar datos");
console.log("2: ver datos");

let opcion = prompt("Eliga la opcion que desee")

switch (opcion) {
    case "1":
        contraseña = prompt("Ingrese la nueva contraseña");
        correo = prompt("Escriba el nuevo correo");
        console.log("Sus datos han sido actualizados y son los siguientes")
        console.log("contraseña:",contraseña,"correo:",correo);
        break;
    case "2":
        console.log("su contraseña es: ", contraseña);
        console.log("su correo es: ", correo);
        break;

    default:
        console.log("Opcion no valida");
        break;
}