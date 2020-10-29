//The base url to grab the pokeapi
const baseUrl = 'https://pokeapi.co/api/v2'

//Declaire the object that we need and we are searching for pokemon
const query = {
    pokemon: 'pokemon'
}

//Takes in one parameter which is to take in one pokemon to search for
//Async so that we can search for as many as we want without having to wait
export async function fetchPokemon(pokemon) {

    //console log to see what the url is ( error handling )
    console.log(`${baseUrl}/${query.pokemon}/${pokemon}`)

    //This literally grabs the url for the pokemon we want so in our case ex
    // https://pokeapi.co/api/v2/pokemon/"PokemonName"
    return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`)
}