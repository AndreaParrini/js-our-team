/* 
            MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. 
*/

// Creo l'array di ogetti con i dati forniti

const teamMember = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        /* image: 'wayne-barnett-founder-ceo.jpg' */
        image: './img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        /* image: 'angela-caroll-chief-editor.jpg' */
        image: './img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        /* image: 'walter-gordon-office-manager.jpg' */
        image: './img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        /* image: 'angela-lopez-social-media-manager.jpg' */
        image: './img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        /* image: 'scott-estrada-developer.jpg' */
        image: './img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        /* image: 'barbara-ramos-graphic-designer.jpg' */
        image: './img/barbara-ramos-graphic-designer.jpg'
    }
]

// recupero il nodo della DOM dove inserire le stringhe
const rowEl = document.querySelector('.container .row');

/* 
            MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto 
*/

// Creo un ciclo for per poter stampare nome, ruolo e foto per ogni membro in console.

stampCardMember(rowEl);



/**
 * function to generate markup ok card member
 * @param {String} name name of member
 * @param {String} role role of member
 * @param {String} image image of member
 * @returns the markup of card member
 */
function generateCardMember(name, role, image){
    // creo il markup del div da inserire nella DOM

    /* 
                MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
    const divMarkup = `<div>Nome: ${nameMember} Ruolo: ${roleMember} Image: <img src="${imageMember}" ></div>` 
    */

    /* 
                BONUS 2:
    Organizzare i singoli membri in card/schede
     */
    // creo un stringa con il markup della card
    const cardMarkup = `
        <div class="col">
            <div class="card mb-3">
                <img src="${image}" class="card-img-top mh-50" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${role}</p>
                </div>
            </div>
        </div> 
    `
    return cardMarkup;
}

/**
 * function to stamp all card member in html
 * @param {Element} rowEl the DOM element to stamp card in html
 */
function stampCardMember(rowEl){
    for (let i = 0; i < teamMember.length; i++) {
        const infoOfMember = teamMember[i];
        // assegno ad una costante le varie proprietà dell'oggetto
        const nameMember = infoOfMember.name;
        const roleMember = infoOfMember.role;
        const imageMember = infoOfMember.image;
        // stampo in console le tre variabile create
        console.log(nameMember, roleMember, imageMember);
        // richiamo la funzione per assegnare alla costante il markup della card
        const cardMarkup = generateCardMember(nameMember, roleMember, imageMember);
        // stampo in html il markup creato
        rowEl.insertAdjacentHTML('beforeend', cardMarkup);
    }
}