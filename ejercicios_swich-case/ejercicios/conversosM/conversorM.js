let longitud = parseFloat(prompt("Ingrese la longitud que desee convertir"));
let medidaOriginal = prompt("Ingrese la unidad de medida que desee");



switch (medidaOriginal) {
    case "cm":
        let metro = longitud/100;
        console.log("la convercion de centimetros a metros es de: ",metro,"m");
        break;
    case "m":
        let centimetro = longitud*100;
        console.log("La conversion de metros a centimetros es de: ",centimetro,"cm");
        break
    default:
        console.log("datos no validos");
        break;
}