import axios from "axios";
import getClickedPokemon from "./clickedPokemon.js";
import {storedPokemon, displayPokemon} from "./savedPokemon.js";
import { getTime } from "./timer.js";

const getPokemon = async() => {
    let pokemonNames = [];



    if(!localStorage.getItem('pokemonList')){
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
            clickPokemon.addEventListener('click', (e) => {
                keepCount++
                console.log(e)
                console.log(e.pointerType)
                console.log(e.type)
                if(e.pointerType && e.type && keepCount > 1){
                    console.log('this works')
                    console.log('keeping count: ', keepCount)
                    return
                }

                getClickedPokemon(keepCount, i, showPokeImg, childContainer, pokemonName, pokemonImages)
                storedPokemon(keepCount, i, showPokeImg, childContainer, pokemonName, pokemonImages)
            }
            ) 
            // displayPokemon()
        }
    }

    displayPokemon()

    
    return pokemonNames
}







export default getPokemon; 