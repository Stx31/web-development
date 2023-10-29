
function mostrarPersonaje() {
   
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
        
            const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];

          
            const characterInfo = document.getElementById('character-info');

            
            characterInfo.innerHTML = `
                <h2>${randomCharacter.name}</h2>
                <img src="${randomCharacter.image}" alt="${randomCharacter.name}">
                <p>Género: ${randomCharacter.gender}</p>
                <p>Especie: ${randomCharacter.species}</p>
            `;
        })
        .catch(error => {
            console.error('Error al cargar los datos de la API', error);
        });
}
const showCharacterButton = document.getElementById('show-character-button');
showCharacterButton.addEventListener('click', mostrarPersonaje);