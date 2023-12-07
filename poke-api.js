import axios from "axios";
import getClickedPokemon from "./clickedPokemon.js";
import {storedPokemon, displayPokemon} from "./savedPokemon.js";
import { getTime } from "./timer.js";

const getPokemon = async() => {
    let pokemonNames = [];

    // let pokemonLength = localStorage.getItem('pokemonList')? JSON.parse(localStorage.getItem('pokemonList')).length
    // : null
    // console.log(pokemonLength)

    let pokemonID = JSON.parse(localStorage.getItem('pokemonList'));
    console.log(pokemonID)



    // console.log(pokemonID[0]['pokemon-id'])
    // console.log(!localStorage.getItem('pokemonList'))
    // console.log(typeof pokemonLength !== 'number')
    // console.log(pokemonLength < 6)
    // || (typeof pokemonLength !== 'number' || pokemonLength < 6)
    if(!localStorage.getItem('pokemonList')){
        for(let i = 1; i <= 12; i++ ){

        //     let testingNum = i - 1
        //     debugger
        //     console.log('keeping track of the i num: ', i)
        //     console.log(testingNum)
        //     // console.log('tracking number', pokemonID[testingNum]['pokemon-id'], 'and i number: ', i)
        //     console.log(pokemonID.includes(pokemonID[0]['pokemon-id']))
        //     let getTrue;

        //     let convertToArr = Object.entries(pokemonID)
        //     console.log(convertToArr)
        //     let hardCodedArr = Object.entries(convertToArr[0][1])
        //     console.log(convertToArr[testingNum][i])
        //     console.log(hardCodedArr)

        //     console.log(convertToArr.includes(convertToArr[testingNum][i]))

        //     if(typeof pokemonID[testingNum]['pokemon-id'] === undefined || pokemonID[testingNum]['pokemon-id'] === undefined){
        //         getTrue = false; 
        //     }else {
        //         getTrue = pokemonID[testingNum]['pokemon-id'] !== undefined && pokemonID[testingNum]['pokemon-id']  === i? true : false
        //     }

        //     console.log(getTrue)
        
        // if(getTrue){
        //     if(localStorage.getItem('pokemonList') !== null && pokemonID[testingNum]['pokemon-id'] === i){
        //         continue; 
        //     }
        // }


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