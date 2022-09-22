//sitio de apuestas de tenis//


// function grandSlam () {
//     let resultado = parseInt(prompt("Elegi el grand slam en el cual deseas apostar: \n 1 - Australian Open \n 2-Roland Garros \n 3- Wimbledon \n 4 Us Open"))
//     switch (resultado) {
//         case 1:
//             alert("Elegiste el Australian Open. ¡Genial! \n Veremos ahora que opciones de jugadores hay...");
//             break;
//         case 2:
//             alert("Elegiste Roland Garros. ¡Genial! \n Veremos ahora que opciones de jugadores hay...");
//             break;
//         case 3:
//             alert("Elegiste Wimbledon. ¡Genial! \n Veremos ahora que opciones de jugadores hay...");
//             break;
//         case 4:
//             alert("Elegiste Us Open. ¡Genial! \n Veremos ahora que opciones de jugadores hay...");
//             break;
//         default:
//             while (resultado<1 || resultado>4) {
//                 grandSlam();
//             }
//             }
//     }


//         function player () {

//         let resultado = parseInt(prompt("¿Por cual jugador deseas apostar?: \n 1- Medvedev \n 2-Nadal \n 3-Alcaraz \n 4- Tsisipas \n 5-Ruud "));

//             if (resultado==1) {
//                 alert("Elegiste al numero 1 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultado) + " pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");

//             } else if (resultado==2){
//                 alert("Elegiste al numero 2 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultado)+" pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");
//             }

//             else if (resultado==3){
//                 alert("Elegiste al numero 3 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultado)+" pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");}

//             else if (resultado==4){
//                 alert("Elegiste al numero 4 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultadoi)+" pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");}

//             else if (resultado==5){
//                 alert("Elegiste al numero 5 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultado)+" pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");}

//             else {
//                 while(resultado<1 || resultado>5)
//                 player();
//             }
//         }

//         function cobrar () {
//             let metodoPagoCorrecto=("VISA")
//             let metodoPagoCorrecto1=("CABAL");
//             let metodoPagoCorrecto2=("MASTERCARD");
//             let metodoPagoCorrecto3=("AMERICAN EXPRESS");

//             for (let index = 3;index > 0;index--) {
//                 let metodoPago=prompt("Elegi un metodo de pago para abonar, tenes " + index + " opciones");
//                 let metodoPagoM= metodoPago.toUpperCase();
//                 if (metodoPagoM==metodoPagoCorrecto||metodoPagoM==metodoPagoCorrecto1||metodoPagoM==metodoPagoCorrecto2||metodoPagoM==metodoPagoCorrecto3) 
//                 {
//                     alert("Barbaro, vas a poder abonar.Te redirigiremos para el pago. Espere unos segundos... ");
//                     break;
//                 }

//             }
//         }


// grandSlam();
// player();
// cobrar();

// let info = prompt("¿Deseas saber mas informacion sobre los GrandSlams? : \n 1- Si \n 2-No");
// function informacion() {
//     switch (info) {
//         case "1":
//             alert("Genial, paseremos a darte mas información. ")
//             break;

//         default:
//             alert("OK,te esperamos la proxima :) ")
//             break;
//     }
// }


// informacion();



// class GrandSlam {

//     constructor(nombre, pais, ciudad) {

//         this.nombre = nombre;
//         this.pais = pais;
//         this.ciudad = ciudad;
//     }

//     mostrar() {
//         console.log("Te voy a dar información sobre el torneo " + this.nombre + " .Se juega en: " + this.pais + " en la ciudad de " + this.ciudad);
//     }


// }

// const gs1 = new GrandSlam("Australian Open", "Australia", "Melbourne");
// const gs2 = new GrandSlam("Roland Garros", "Francia", "Paris");
// const gs3 = new GrandSlam("Wimbledon", "Inglaterra", "Londres");
// const gs4 = new GrandSlam("Us Open", "Estados Unidos", "Nueva York");

// const Torneos = [gs1, gs2, gs3, gs4];


// let info1 = prompt("Indicame ahora por favor sobre que torneo deseas saber informacion:  \n 1- Australian Open \n 2- Roland Garros \n 3- Wimbledon \n 4- Us Open");  

// function informacion1() {switch (info1) {
//     case "1":
//         Torneos[0].mostrar();
//         break;

//     case "2":
//         Torneos[1].mostrar();
//         break;
//     case "3":
//         Torneos[2].mostrar();
//         break;
//     case "4":
//         Torneos[3].mostrar();
//         break;
// }
// }
// //sale este switch por consola solo, no lo pude poner con alert para printearlo, me tira como undefined, por lo que debo mejorarlo//
// informacion1();

// // sector de compra de entradas para los torneos en la pagina, falta desarrollar// 

// const tickets = [
//     {nombre:"platea",precio:100},
//     {nombre:"popular",precio:50},
//     {nombre:"palco",precio:300},
//     {nombre:"preferencial",precio:500}
    
// ]

// const resulrata = tickets.filter((Element)=>Element.precio <100)
// const resulnormal= tickets.filter((Element)=>Element.precio > 80 && Element.precio < 350 )
// const resulcheto = tickets.filter((Element)=>Element.precio > 400)



// let entradas = prompt("¿Que entrada deseas comprar? \n 1-Populares (Economicas, pero con mala vista y bajo confort) \n 2- Plateas bajas y altas \n 3- VIP");

// switch (entradas) {
//     case "1":
//         console.log("Tenemos como opcion: " + resulrata);
//         break;

//     case "2":
//         console.log("Tenemos como opcion: " + resulnormal);
//         break;
//     case "3":
//         console.log("Tenemos como opcion: " + resulcheto);
//         break;
    
// }

// //me tira objeto de objeto. la idea era que me aparezca las opciones de precio de la entrada elegida por el cliente//.