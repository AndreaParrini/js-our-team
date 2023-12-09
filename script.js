/* 
            MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. 
*/

// Creo l'array di ogetti con i dati forniti

const teamMember = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',	
        /* image: 'angela-caroll-chief-editor.jpg' */
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',	
        /* image: 'walter-gordon-office-manager.jpg' */
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',	
        /* image: 'angela-lopez-social-media-manager.jpg' */
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',	
        /* image: 'scott-estrada-developer.jpg' */
        image: 'https://picsum.photos/200/300'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',	
        /* image: 'barbara-ramos-graphic-designer.jpg' */
        image: 'https://picsum.photos/200/300'
    }
]

/* 
            MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto 
*/

// Creo un ciclo for per poter stampare nome, ruolo e foto per ogni membro in console.

for (let i = 0; i < teamMember.length; i++) {
    const infoOfMember = teamMember[i];
    // assegno ad una costante le varie proprietà dell'oggetto
    const nameMember = infoOfMember.name;
    const roleMember = infoOfMember.role;
    const imageMember = infoOfMember.image;
    // stampo in console le tre variabile create
    console.log(nameMember, roleMember, imageMember);

    // recupero il nodo della DOM dove inserire le stringhe
    const rowEl = document.querySelector('.container .row');
    // creo il markup del div da inserire nella DOM
    const divMarkup = `<div>Nome: ${nameMember} Ruolo: ${roleMember} Image: <img src="${imageMember}" ></div>`
    // inserisdo in html il markup creato
    rowEl.insertAdjacentHTML('beforeend', divMarkup);
}