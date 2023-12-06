import axios from "axios";
import getClickedPokemon from "./clickedPokemon.js";
//TKH-Gotta-Fetch-Em-All

const getPokemon = async() => {
    let pokemonNames = [];
    for(let i = 1; i <= 6; i++ ){
        const randomPokemon = Math.floor(Math.random() * 350)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        let pokemonName = await response.data.name;
        let pokemonImages = await response.data.sprites;

        let keepCount = 0; 

        let showPokeImg = document.createElement('img');
        showPokeImg.setAttribute('class', 'pokeball-img')
        showPokeImg.src = './images/pokeball.png'

        let childContainer = document.createElement('div'); 
        childContainer.setAttribute('class', 'poke-component')
        childContainer.setAttribute('id', `pokemon-id-${i}`)

        childContainer.append(showPokeImg);

        let parentContainer = document.querySelector('#app')
        parentContainer.append(childContainer)

        pokemonNames.push({pokemonName, pokemonImages});

        let clickPokemon = document.querySelector(`#pokemon-id-${i}`);
        clickPokemon.addEventListener('click', () => {
            keepCount++
            getClickedPokemon(keepCount, i, showPokeImg, childContainer, pokemonName, pokemonImages)
        }
        )
    }
    return pokemonNames
}




export default getPokemon; 