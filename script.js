// DESCRIZIONE ESERCIZIO
// 1. Inserisco in JS un array con i dati del team
// 2 Mostra array in console
// 3. Stampare le stesse informazioni nel DOM sottoforma di stringhe
// BONUS
// 3. Mostro a schermo l'immagine che ho precedentemente dichiarato nell'object
// 4 Mostro a schermo l'effettiva immagine dichiarata precedentemente come stringa
// 5. Organizzo le informazioni in card


// ------------------------------------------------------ //


// VARIABILI GLOBALI
const card_grid = document.querySelector(`.card_grid`);

// 1. CREO L'ARRAY
const arrTeam = [
    {
        nome: `Wayne Barnett`,
        job: `Founder & CEO`,
        img: `img/wayne-barnett-founder-ceo.jpg`
    },
    {
        nome: `Angela Caroll`,
        job: `Chief Editor`,
        img: `img/angela-caroll-chief-editor.jpg`
    },
    {
        nome: `Walter Gordon`,
        job: `Office Manager`,
        img: `img/walter-gordon-office-manager.jpg`
    },
    {
        nome: `Angela Lopez`,
        job: `Social Media Manager`,
        img: `img/angela-lopez-social-media-manager.jpg`
    },
    {
        nome: `Scott Estrada`,
        job: `Developer`,
        img: `img/scott-estrada-developer.jpg`
    },
    {
        nome: `Barbara Ramos`,
        job: `Graphic Designer`,
        img: `img/barbara-ramos-graphic-designer.jpg`
    },
];

// 2. MOSTRO ARRAY IN CONSOLE
console.log(`Array con i dati degli objects:`)
console.log(arrTeam)

// 4. TRASFORMO LA IMG STRINGA IN IMMAGINE EFFETTIVA
// &&
// 5. INSERISCO LE INFORMAZIONI IN CARD
for (i = 0; i < arrTeam.length; i++) {
    card_grid.innerHTML += `<div class="single_card">` + `<img src=${arrTeam[i].img}>` + `<div class="info"><h2>${arrTeam[i].nome}</h2>` + `<p>${arrTeam[i].job}</p></div>`
}


// ------------------------------


// FUNCTION