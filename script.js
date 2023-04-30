// DESCRIZIONE ESERCIZIO
// 1. Inserisco in JS un array con i dati del team
// 2. Mostro a pagina le informazioni che ho inserito nell'array


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
console.log(arrTeam[1].nome)

// 2. MOSTRO LE INFORMAZIONI A SCHERMO
for (i = 0; i < arrTeam.length; i++) {
    card_grid.innerHTML += `<div class="single_card">` + `<img src=${arrTeam[i].img}>` + `<div class="info"><h2>${arrTeam[i].nome}</h2>` + `<p>${arrTeam[i].job}</p></div>`
}


// ------------------------------


// FUNCTION