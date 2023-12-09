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
        image: 'https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        /* image: 'angela-caroll-chief-editor.jpg' */
        image: 'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        /* image: 'walter-gordon-office-manager.jpg' */
        image: 'https://fastly.picsum.photos/id/36/4179/2790.jpg?hmac=OCuYYm0PkDCMwxWhrtoSefG5UDir4O0XCcR2x-aSPjs'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        /* image: 'angela-lopez-social-media-manager.jpg' */
        image: 'https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        /* image: 'scott-estrada-developer.jpg' */
        image: 'https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        /* image: 'barbara-ramos-graphic-designer.jpg' */
        image: 'https://fastly.picsum.photos/id/435/1200/800.jpg?hmac=NRHmYJ-8T18f_jUu_zGUaS4pmJJW2baw-isXTEPVt7U'
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