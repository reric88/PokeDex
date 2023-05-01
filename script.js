// Pokedex project
const pokeContainer = document.querySelector('.container');

// Number of pokemon using the first 150 pokemon in the PokeAPI
const numOfPokemon = 151;

// The createPokeCard function creates a new card (section element) and adds the new card to the dom inside of the dive with the id of container
function createPokeCard(pokemon){
    const pokeCard = document.createElement('section');
    pokeCard.classList.add('pokemon');
    pokeContainer.append(pokeCard);
    
    // Setting the innerHTML for the new card using the data/object that is passed into the 'pokemon' parameter. Also using the toUpperCase() method on the pokemon name so it will display in uppercase text
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `
}

// The getPokemonData function makes an Axios GET request to the PokeAPI using a specific pokemon ID/number, then takes the returned data and passes it into the createPokeCard function.
// The argument/value passed into the ID parameter will be a number created in the loop in the next function (aka the getPokemon function)
async function  getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonData = await axios.get(url);
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.front_shiny);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);
}

// The getPokemon function loops through all the pokemon id's and runs/executes the pokemonData function for each id
// Using async/await on this function because the code in the getPokemonData function is asynchronous (aka there is axious request in the function)
async function getPokemon(i){
    for(i=1; i<numOfPokemon; i++){
        await getPokemonData(i);
    }
}

getPokemon();
























