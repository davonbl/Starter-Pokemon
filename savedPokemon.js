

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

/*

The reason for the amount of code is that I was dealing with very weird errors that made
in diffcult to resolve within constrained time if I was consider the modular code route. 

ex: passing in arguments within the displayPokemon function (ex:
displayPokemon(showPokeImg, pokeID, childContainer,pokemonName ) )

*/

export async function displayPokemon(){
    if(localStorage.getItem('pokemonList')){
        // debugger
        console.log('the stored pokemon is here')

        let parsePokemonList = JSON.parse(localStorage.getItem('pokemonList'))

        let sortPokemonList = parsePokemonList.sort((a,b) => {
            return a['pokemon-id'] - b['pokemon-id']
        })

        for(let i = 0; i < sortPokemonList.length; i++){
            // debugger
            let testingImg = document.createElement("img")
            testingImg.src = await sortPokemonList[i]['pokemon-image'].front_default
            console.log
            let addingClasses = [`pokemon-image-${i}`, 'pokemon-img']
            testingImg.classList.add(...addingClasses)


            let showPokeName = document.createElement('p');
            showPokeName.innerText = await sortPokemonList[i]['pokemon-name'];
            showPokeName.setAttribute('class', 'pokemonName')

            let childContainer = document.createElement('div'); 
            childContainer.setAttribute('class', 'poke-component')
            childContainer.setAttribute('id', `pokemon-id-${i}`)

            childContainer.append(testingImg, showPokeName)
            let parentContainer = document.querySelector('#app')
            parentContainer.append(childContainer)
        }

        localStorage.setItem('pokemonList', JSON.stringify(sortPokemonList))

    }else{
        console.log('no pokemon here')
    }
}