import axios from "axios";
//TKH-Gotta-Fetch-Em-All

const getPokemon = async() => {
    let pokemonNames = [];
    for(let i = 1; i <= 10; i++ ){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let pokemonName = await response.data.name
        let pokemonImages = await response.data.sprites
        pokemonNames.push({pokemonName, pokemonImages})
    }
    return pokemonNames
}

export default getPokemon; 