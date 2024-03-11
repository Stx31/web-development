const input = document.getElementById('pokemon-input');
const button = document.getElementById('buscar-btn');
const pokemoncontainer = document.querySelector('.pokemon-container');

button.addEventListener('click', () => {
    const pokemonName = input.value.toLowerCase();
    traerPokemon(pokemonName);
});

function traerPokemon(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('No se encontró el Pokémon');
            }
            return res.json();
        })
        .then((data) => {
            crearPokemon(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

function crearPokemon(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;
    
    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    pokemoncontainer.innerHTML = ''; 
    pokemoncontainer.appendChild(div);
}