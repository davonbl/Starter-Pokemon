import getPokemon from "./poke-api";
import { getTime } from "./timer";

let test = await getPokemon()


// console.log(test)


setInterval(() => {
  getTime()
  let removeChildren = document.querySelector('#app')
  if(getTime() == '10:03:00 PM'){
    localStorage.clear()
    while (removeChildren.hasChildNodes()) {
      removeChildren.removeChild(removeChildren.firstChild);
    }
    test = getPokemon()
  }
}, 1000)
