
// Snack 3
// Abbiamo sempre un array di squadre, con:
// nome
// punti fatti
// falli subiti
// Stampare in html (in forma tabellare!!!) 
// i dati relativi alle squadre evidenziando in giallo la riga corrispondente 
// alla squadra con più falli subiti.

const squadreDiCalcio = [
    {
        nome: "Milan",
        puntiFatti: 23,
        falliSubiti: 5,
    },
    {
        nome: "Juve",
        puntiFatti: 45,
        falliSubiti: 12,
    },
    {
        nome: "Roma",
        puntiFatti: 65,
        falliSubiti: 6,
    },
    {
        nome: "Lazio",
        puntiFatti: 12,
        falliSubiti: 10,
    },
];

let squadra = "";
let moreFalliSubiti = 0;

for (let x = 0; x < squadreDiCalcio.length; x++) {
    const {falliSubiti} = squadreDiCalcio[x];
    if (falliSubiti > moreFalliSubiti) {
        squadra = squadreDiCalcio[x];
        moreFalliSubiti = falliSubiti;
    }
}

console.log(squadra);

for (let i = 0; i < squadreDiCalcio.length; i++) {
    const {nome, puntiFatti, falliSubiti} = squadreDiCalcio[i];
    let nuovaSquadra = "";
    if (squadreDiCalcio[i] === squadra) {
        nuovaSquadra = "yellow";
    }
    document.querySelector(".table").innerHTML += `
    <ul class= "${nuovaSquadra}">
        <li>${nome}</li>
        <li>${puntiFatti}</li>
        <li>${falliSubiti}</li>
    </ul>
    `
}
