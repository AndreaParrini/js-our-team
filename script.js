/* 
            MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. 
*/

// Creo l'array di ogetti con i dati forniti

const teamMember = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',	
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',	
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',	
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',	
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',	
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

/* 
            MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto 
*/

// Creo un ciclo for per poter stampare nome, ruolo e foto per ogni membro in console.

for (let i = 0; i < teamMember.length; i++) {
    const infoOfMember = teamMember[i];
    const nameMember = infoOfMember.name;
    const roleMember = infoOfMember.role;
    const imageMember = infoOfMember.image;
    console.log(nameMember, roleMember, imageMember);
}