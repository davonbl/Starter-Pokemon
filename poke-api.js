import axios from "axios";
import getClickedPokemon from "./clickedPokemon.js";
import {storedPokemon, displayPokemon, testingPokemon} from "./savedPokemon.js";
import { getTime } from "./timer.js";

const getPokemon = async() => {
    let pokemonNames = [];

    // let pokemonLength = localStorage.getItem('pokemonList')? JSON.parse(localStorage.getItem('pokemonList')).length
    // : null
    // console.log(pokemonLength)

    let pokemonID = JSON.parse(localStorage.getItem('pokemonList'));

    let getPokeID = pokemonID.map((item) => {
        return item['pokemon-id']
    })
    console.log('getPokeID', getPokeID)
    // console.log(pokemonID)



    // console.log(pokemonID[0]['pokemon-id'])
    // console.log(!localStorage.getItem('pokemonList'))
    // console.log(typeof pokemonLength !== 'number')
    // console.log(pokemonLength < 6)
    // || (typeof pokemonLength !== 'number' || pokemonLength < 6)

    // debugger
    // if(!localStorage.getItem('pokemonList')){

    // }


        for(let i = 1; i <= 12; i++ ){

            let localStorageArrNum = i - 1
            let testingPokemonNum = i

            let parseOutPokemon = i - 1
            let getPokeStorageIndex;
            // debugger
            console.log('keeping track of the i num: ', i)
            console.log('localStorageArrNum:', localStorageArrNum)

            //when the pokemon is shown; the error is that the pokemon object is not present, so I have to test it out 
            // console.log('tracking number', pokemonID[localStorageArrNum]['pokemon-id'], 'and i number: ', i)

            // console.log(pokemonID.includes(pokemonID[0]['pokemon-id']))


            // let getTrue;

            // let convertToArr = Object.entries(pokemonID)
            // console.log(convertToArr)
            // let hardCodedArr = Object.entries(convertToArr[0][1])
            // console.log(convertToArr[localStorageArrNum][i])
            // console.log(hardCodedArr)

            // console.log(convertToArr.includes(convertToArr[localStorageArrNum][i]))

            // if(typeof pokemonID[localStorageArrNum]['pokemon-id'] === undefined || pokemonID[localStorageArrNum]['pokemon-id'] === undefined){
            //     getTrue = false; 
            // }else {
            //     getTrue = pokemonID[localStorageArrNum]['pokemon-id'] !== undefined && pokemonID[localStorageArrNum]['pokemon-id']  === i? true : false
            // }

            // console.log(getTrue)
        
        // if(getTrue){
        //     if(localStorage.getItem('pokemonList') !== null && pokemonID[localStorageArrNum]['pokemon-id'] === i){
        //         continue; 
        //     }
        // }


            const randomPokemon = Math.floor(Math.random() * 350)
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
            
            // console.log(response)



            const pokemonShow = await response.data
            console.log(pokemonShow)


            // when the pokemon is shown; the error is that the pokemon object is not present, so I have to test it out 
            // debugger
            // this can be deleted
            // console.log('tracking number', pokemonID[localStorageArrNum]['pokemon-id'], 'and i number: ', i)
            console.log(getPokeID.includes(i))
            // console.log('for the bottom: ', pokemonID[localStorageArrNum]['pokemon-id']); 
            // console.log('getPokeIndex: ', getPokeID.indexOf(pokemonID[localStorageArrNum]['pokemon-id']))

            // This can be deleted 

            // console.log(pokemonID.includes(pokemonID[0]['pokemon-id']))


            let getTrue;

            // This can be deleted

            // let convertToArr = Object.entries(pokemonID)
            // console.log(convertToArr)
            // let hardCodedArr = Object.entries(convertToArr[0][1])
            // console.log(convertToArr[localStorageArrNum][i])
            // console.log(hardCodedArr)

            // console.log(convertToArr.includes(convertToArr[localStorageArrNum][i]))

            // this can be deleted 
            // if(typeof pokemonID[localStorageArrNum]['pokemon-id'] === undefined){
            //     getTrue = false; 
            // }else {
            //     getTrue = pokemonID[localStorageArrNum]['pokemon-id'] !== undefined && pokemonID[localStorageArrNum]['pokemon-id']  === i? true : false

            // }

            // delete this 
            // console.log(getTrue)
        
            // if(getTrue){
            //     getPokeStorageIndex = getPokeID.indexOf(pokemonID[localStorageArrNum]['pokemon-id'])
            //     if(localStorage.getItem('pokemonList') !== null && pokemonID[localStorageArrNum]['pokemon-id'] === i){
            //         testingPokemon(getPokeStorageIndex)
            //         continue; 
            //     }
            // }


            if(getPokeID.includes(i)){
                getPokeStorageIndex = getPokeID.indexOf(i)
                console.log('testing if: ', getPokeStorageIndex)
                if(localStorage.getItem('pokemonList') !== null){
                    testingPokemon(getPokeStorageIndex)
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
                // console.log(e)
                // console.log(e.pointerType)
                // console.log(e.type)
                if(e.pointerType && e.type && keepCount > 1){
                    // console.log('this works')
                    // console.log('keeping count: ', keepCount)
                    return
                }

                getClickedPokemon(keepCount, i, showPokeImg, childContainer, pokemonName, pokemonImages)
                storedPokemon(keepCount, i, showPokeImg, childContainer, pokemonName, pokemonImages)
            }
            ) 
            // displayPokemon()
        }




    // displayPokemon()

    
    return pokemonNames
}







export default getPokemon; 