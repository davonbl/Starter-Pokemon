import axios from "axios";


async function testing(){

    let getURLInfo = new URLSearchParams(window.location.search)
    console.log(getURLInfo)
    let getPokemonID = Number(getURLInfo.get('pokemon-id'))
    console.log(getPokemonID)
    let getPokemon = JSON.parse(localStorage.getItem('pokemonList')); 

    let getPokedexID = getPokemon.filter(ele => {
        console.log('here is the pokemon: ', ele)
        // return ele.includes(getPokemonID)
        return Object.values(ele).includes(getPokemonID)
    })
    console.log(getPokemon)
    console.log('here it is: ', getPokedexID)

    let pastePokedexID = getPokedexID[0]['pokedex-id']

    console.log('hello from pokemon details')
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pastePokedexID}`)
    console.log('axios link: ', response)
    let showClickedPokemon = response.data
    console.log('here is the data:' , showClickedPokemon)


    console.log('here is the link to get more details of said pokemon: ', showClickedPokemon.species.url)
    let subResponse = await axios.get(showClickedPokemon.species.url)
    console.log('testing another route: ', subResponse)
    let testingLink = subResponse.data
    // console.log('pokemon data: ', testingLink.flavor_text_entries)
    // console.log('name of pokemon: ', showClickedPokemon.name)
    // console.log('here are the sprites: ', showClickedPokemon.sprites)
    // console.log('here is the image im interested in: ', showClickedPokemon.sprites.other.dream_world.front_default)

    let pokemonName =  showClickedPokemon.name
    let pokemonImage = showClickedPokemon.sprites.other.dream_world.front_default
    let pokemonDescription = testingLink.flavor_text_entries[0].flavor_text
    console.log(testingLink.flavor_text_entries[0].language.name)
    // I have to do a forloop and return it till it is en
    if(testingLink.flavor_text_entries[0].language.name !== 'en'){
        console.log('it is not in english!')
        pokemonDescription = testingLink.flavor_text_entries[1].flavor_text
    }


    let displayName = document.createElement('h1')
    displayName.innerText = pokemonName
    let displayImage = document.createElement('img')
    let displayPokemonDescription = document.createElement('p')
    displayPokemonDescription = pokemonDescription
    if(pokemonDescription.includes('\f')){
        console.log('it has it!!!')
        console.log(pokemonDescription.split('').indexOf('\f'))
        let getIndex = pokemonDescription.split('').indexOf('\f')
        let update = pokemonDescription.split('')
        update[getIndex] = ' '
        // console.log('look at this: ', update) 
        pokemonDescription = update.join('')
        displayPokemonDescription = pokemonDescription
    }
    displayImage.src = pokemonImage
    document.body.append(displayName, displayImage, displayPokemonDescription)
    
}


testing()

document.querySelector('#returnBackBtn').addEventListener('click', () => {
    window.history.back()
})