import axios from "axios";
//TKH-Gotta-Fetch-Em-All

const getPokemon = async() => {
    let pokemonNames = [];
    for(let i = 1; i <= 6; i++ ){
        const randomPokemon = Math.floor(Math.random() * 350)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        let pokemonName = await response.data.name;
        let pokemonImages = await response.data.sprites;

        let keepCount = 0

        let showPokeImg = document.createElement('img');
        showPokeImg.setAttribute('class', 'pokeball-img')
        showPokeImg.src = './images/pokeball.png'

        // let showPokeName = document.createElement('p');
        // showPokeName.innerText = pokemonName;

        let childContainer = document.createElement('div'); 
        childContainer.setAttribute('class', 'poke-component')
        childContainer.setAttribute('id', `pokemon-id-${i}`)

        childContainer.append(showPokeImg);

        let parentContainer = document.querySelector('#app')
        parentContainer.append(childContainer)

        // console.log('testing: ', pokemonImages.front_default)
        pokemonNames.push({pokemonName, pokemonImages});

        let clickPokemon = document.querySelector(`#pokemon-id-${i}`);
        clickPokemon.addEventListener('click', () => {
            testing(keepCount, i, showPokeImg, childContainer, pokemonName, pokemonImages)
        }
        
        // () => {
        //     keepCount++
        //     console.log(`click: pokemon #${i}`)
        //     showPokeImg.src = pokemonImages.front_default;

        //     showPokeImg.classList.remove('pokeball-img');
        //     showPokeImg.classList.add('pokemon-img')

        //     if(keepCount === 1){
        //         let showPokeName = document.createElement('p');
        //         showPokeName.innerText = pokemonName;
    
        //         childContainer.append(showPokeName)
        //     }

        // }
        )
    }
    return pokemonNames
}


function testing(keepCount, pokeID, showPokeImg, childContainer,pokemonName, pokemonImages){
        keepCount++
        console.log(`click: pokemon #${pokeID}`)
        showPokeImg.src = pokemonImages.front_default;

        showPokeImg.classList.remove('pokeball-img');
        showPokeImg.classList.add('pokemon-img')

        if(keepCount === 1){
            let showPokeName = document.createElement('p');
            showPokeName.innerText = pokemonName;

            childContainer.append(showPokeName)
        }

    
}

export default getPokemon; 