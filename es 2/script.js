
// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome,
// punti fatti,
// falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
// solo nomi e falli subiti e stampiamo tutto in console.
// Svilupparlo in ES6

const squadreDiCalcio = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juve",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

function random(min, max) {
    return Math.floor(Math.random () * (max - min + 1)) + min;
}

for (let x = 0; x < squadreDiCalcio.length; x++) {
    squadreDiCalcio[x].puntiFatti = random(0, 200);
    squadreDiCalcio[x].falliSubiti = random(0, 200);
}

console.log(squadreDiCalcio);

const nuoveSquadre = [];

for (let x = 0; x < squadreDiCalcio.length; x++){
    const {nome, falliSubiti} = squadreDiCalcio[x];
    nuoveSquadre[x] = {nome, falliSubiti};
}

console.log(nuoveSquadre);
