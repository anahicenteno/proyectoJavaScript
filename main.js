let nombre = prompt("Por favor, ingresa tu nombre");

categoriaFantasia= "Fantasía";
categoriaTerror= "Terror";
categoriaRomance= "Romance";

const precioCF = 800;
const precioCT = 550;
const precioCR = 600;

function ivaA(peso){
    let impuesto = ((precioCF * .21)+precioCF);
    return impuesto;
}

function ivaB(peso){
    let impuesto = ((precioCR * .21)+precioCR);
    return impuesto;
}

function ivaC(peso){
    let impuesto = ((precioCT * .21)+precioCT);
    return impuesto;
}


    let menu = prompt("Bienvenido "+nombre+" elegí el tipo de libro que te gustaría adquirir.\n 1. Fantasía\n 2. Terror\n 3. Romance\n Tipea la letra N si no encontras el género que querés o te arrepentiste para poder salir del menú.");
    
    while (menu !="N"){
    switch(menu){
    case"1":
    alert("Los libros de la categoría "+categoriaFantasia+" están $"+precioCF);
    let compraA = prompt("Escribí OK para confirmar la compra de un libro del género "+categoriaFantasia);
    if (compraA ==="OK"){
        let totalA = ivaA(precioCF);
        alert("MUCHAS GRACIAS! El precio total con IVA es de $"+totalA);
        }
    break;
    case"2":
    alert("Si querés comprar libros de "+categoriaRomance+". salen $"+precioCR);
    let compraB = prompt("Escribi OK para comprar un libro del género "+categoriaRomance);
    if (compraB ==="OK"){
        let totalB = ivaB(precioCR);
        alert("MUCHAS GRACIAS! Buena elección. El precio total con IVA es de $"+totalB);
    }else{
    compraB=alert("Para confirmar escribi OK")
    } break;
    case"3":
    alert("Elegiste comprar "+categoriaTerror+". Estos salen $"+precioCT);
    let compraC = prompt("Escribí OK para comprar un libro del género "+categoriaTerror);
    if (compraC ==="OK"){
        let totalC = ivaC(precioCT);
        alert("MUCHAS GRACIAS! El precio total con IVA es de $"+totalC);
    }else{
    compraB=alert("Para confirmar escribi OK")
    } break;
    default:
    alert("Número inválido. Por favor, "+nombre+" elegí el tipo de libro que te gustaría adquirir.\n 1. Fantasía\n 2. Terror\n 3. Romance\n Tipea la letra N si no encontras el género que querés");
    break;
    }
    menu = prompt("Bienvenido "+nombre+" elegí el tipo de libro que te gustaría adquirir.\n 1. Fantasía\n 2. Terror\n 3. Romance\n Tipea la letra N si no encontras el género que querés");
    }