
// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. 
// Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6.

// versione ES5:

// var biciCorsa = [
//     {
//         nome: "bicicletta rossa",
//         peso: 15,
//     },
//     {
//         nome: "bicicletta rosa",
//         peso: 10,
//     },
//     {
//         nome: "bicicletta bianco",
//         peso: 20,
//     },
// ];

// var lastBici = "";
// var lastPeso = 50;

// for (var i = 0; i < biciCorsa.length; i++) {
//     var thisPeso = biciCorsa[i].peso;
//     if (thisPeso < lastPeso || typeof lastPeso === "undefined") {
//         lastBici = biciCorsa[i];
//         lastPeso = thisPeso;
//     }
// }

// console.log(lastBici);

// versione ES6:

const biciCorsa = [
    {
        nome: "bicicletta rossa",
        peso: 15,
    },
    {
        nome: "bicicletta rosa",
        peso: 10,
    },
    {
        nome: "bicicletta bianco",
        peso: 20,
    },
];

let lastBici = "";
let lastPeso = 50;

for (let i = 0; i < biciCorsa.length; i++) {
    const {peso} = biciCorsa[i];
    if (peso < lastPeso || typeof lastPeso === "undefined") {
        lastBici = biciCorsa[i];
        lastPeso = peso;
    }
}

console.log(lastBici);