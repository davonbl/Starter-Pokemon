

export default function getClickedPokemon(keepCount, pokeID, showPokeImg, childContainer,pokemonName, pokemonImages){
    console.log(`click: pokemon #${pokeID}`)
    showPokeImg.src = pokemonImages.front_default;

    showPokeImg.classList.remove('pokeball-img');
    let addingClasses = [`pokemon-image-${pokeID}`, 'pokemon-img']
    showPokeImg.classList.add(...addingClasses)

    if(keepCount === 1){
        let showPokeName = document.createElement('p');
        showPokeName.innerText = pokemonName;

        showPokeName.setAttribute('class', 'pokemonName')

        childContainer.append(showPokeName)
    }


}