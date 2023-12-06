import axios from "axios";
//TKH-Gotta-Fetch-Em-All

const getPokemon = async() => {
    let pokemonNames = [];
    for(let i = 1; i <= 6; i++ ){
        const randomPokemon = Math.floor(Math.random() * 350)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        let pokemonName = await response.data.name;
        let pokemonImages = await response.data.sprites;

        let showPokeImg = document.createElement('img');
        showPokeImg.setAttribute('class', 'poke-img')
        showPokeImg.src = pokemonImages.front_default;

        let showPokeName = document.createElement('p');
        showPokeName.innerText = pokemonName;

        let childContainer = document.createElement('div'); 
        childContainer.setAttribute('class', 'poke-component')

        childContainer.append(showPokeImg, showPokeName);

        let parentContainer = document.querySelector('#app')
        parentContainer.append(childContainer)

        // console.log('testing: ', pokemonImages.front_default)
        pokemonNames.push({pokemonName, pokemonImages});
    }
    return pokemonNames
}

export default getPokemon; 