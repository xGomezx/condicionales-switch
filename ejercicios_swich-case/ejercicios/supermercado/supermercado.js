let producto = prompt("Ingrese el producto");

switch (producto) {
    case "crema":
        console.log("Paga IVA");
        break;
    case "vino":
        console.log("Paga IVA");
        break;
    case "arroz":
        console.log(" NO paga IVA");
        break;
    case "lentejas":
        console.log(" NO paga IVA");
        break;
    default:
        console.log("Porfavor ingrese un producto valido");
    break;
}