import axios from "axios";
import getClickedPokemon from "./clickedPokemon.js";
import {storedPokemon, displayAllPokemon, displayedClickedPokemon} from "./savedPokemon.js";
// import { getTime } from "./timer.js";

const getPokemon = async() => {

    let pokemonNames = [];
    let numOfClicks = 0; 
    // let oneClick = 0;
    let arrOfPokemonClicked = []

    if(!localStorage.getItem('numOfClicks')){
        localStorage.setItem('numOfClicks', numOfClicks)
    }else{
        numOfClicks = JSON.parse(localStorage.getItem('numOfClicks'));
    }

    let getPokeID;

    if(localStorage.getItem('pokemonList')){
        let pokemonID = JSON.parse(localStorage.getItem('pokemonList'));

        getPokeID = pokemonID.map((item) => {
            return item['pokemon-id']
      
        })
        // console.log('getPokeID', getPokeID)
    }else{
        getPokeID = []
    }

    if(numOfClicks >= 6){
        // console.log('it works');
        displayAllPokemon()

    }else{

        // console.log('else statement')

        for(let i = 1; i <= 6; i++ ){


            // let localStorageArrNum = i - 1

            let getPokeStorageIndex;
            // debugger
            // console.log('keeping track of the i num: ', i)
            // console.log('localStorageArrNum:', localStorageArrNum)


            const randomPokemon = Math.floor(Math.random() * 350)
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
            
            // console.log(response)



            const pokemonShow = await response.data
            console.log(pokemonShow)
            console.log(pokemonShow.id)


            // console.log(getPokeID.includes(i))


            if(getPokeID.includes(i)){
                getPokeStorageIndex = getPokeID.indexOf(i)
                // console.log('testing if: ', getPokeStorageIndex)
                if(localStorage.getItem('pokemonList') !== null){
                    displayedClickedPokemon(getPokeStorageIndex)
                    continue; 
                }
            }


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
                // console.log('numOfClicks: ', numOfClicks)
                let addClick = JSON.parse(localStorage.getItem('numOfClicks'))
                
                console.log('pokemonName: ', pokemonName)

                if(!arrOfPokemonClicked.includes(pokemonName)){
                    arrOfPokemonClicked.push(pokemonName)
                    numOfClicks++
                    addClick = numOfClicks;
                }else{
                    console.log('can\'t add number')
                }
                // oneClick++ 
                // console.log('oneClick: ', oneClick)
                // if(oneClick === 1){
                //     addClick = addClick + oneClick
                //     console.log('addClick: ', addClick)
                // }

                localStorage.setItem('numOfClicks', JSON.stringify(addClick))


                if(e.pointerType && e.type && keepCount > 1){
                    console.log('the root url: ', window.location.href)
                    console.log(`pokemon id: pokemon-id-${i}`)
                    let rootURL = window.location.href
                    console.log('what is e', e)
                    window.location.href = `${rootURL}/pokemonDetailsUI.html?pokemon-id=${i}`
                    return
                }

                getClickedPokemon(keepCount, i, showPokeImg, childContainer, pokemonName, pokemonImages)
                storedPokemon(keepCount, i, showPokeImg, childContainer, pokemonName, pokemonImages)
            }
            ) 
        }
    }

    return pokemonNames
}







export default getPokemon; 