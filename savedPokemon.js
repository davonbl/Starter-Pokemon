

export function storedPokemon(keepCount, i, showPokeImg, childContainer, 
    pokemonName, pokemonImages){
        // console.log(keepCount)
        // debugger
    if(!localStorage.getItem('pokemonList')){
        let pokemonList = []
        let pokemonObj = {
            'pokemon-id': i,
            'pokemon-name': pokemonName,
            'pokemon-image': pokemonImages
        }
        pokemonList.push(pokemonObj)

        localStorage.setItem(`pokemonList`, JSON.stringify(pokemonList))
    }else{
        let getPokemonList = JSON.parse(localStorage.getItem('pokemonList'))
        let pokemonObj = {
            'pokemon-id': i,
            'pokemon-name': pokemonName,
            'pokemon-image': pokemonImages
        }

        getPokemonList.push(pokemonObj)

        localStorage.setItem('pokemonList', JSON.stringify(getPokemonList))



    }


    console.log('testing childContainer', childContainer)
}


export function displayPokemon(showPokeImg, childContainer,pokemonName ){
    if(localStorage.getItem('pokemonList')){
        console.log('the stored pokemon is here')

        let parsePokemonList = JSON.parse(localStorage.getItem('pokemonList'))

        let sortPokemonList = parsePokemonList.sort((a,b) => {
            return a['pokemon-id'] - b['pokemon-id']
        })

        // for(let i = 1; i <= sortPokemonList.length; i++){

        // }

        localStorage.setItem('pokemonList', JSON.stringify(sortPokemonList))
        console.log(sortPokemonList)


        // showPokeImg.src = pokemonImages.front_default;

        // showPokeImg.classList.remove('pokeball-img');
        // showPokeImg.classList.add('pokemon-img')
    }else{
        console.log('no pokemon here')
    }
}