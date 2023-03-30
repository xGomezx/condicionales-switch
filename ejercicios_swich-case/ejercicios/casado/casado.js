let estadoCivil = prompt("Ingrese soltero o casado");
let casado = estadoCivil == "casado";

switch (casado) {
    case True:
        console.log("Muy bien")
        break;

    default:
        console.log("Disfrute su solteria");
        break;
}