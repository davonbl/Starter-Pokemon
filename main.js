import getPokemon from "./poke-api";
import { getTime } from "./timer";

const test = await getPokemon()


console.log(test)

let testing = getTime()

setInterval(() => {
  // getTime()
  // console.log(typeof testing)
  if(getTime() == '7:40:00 PM'){
    localStorage.clear()
  }
}, 1000)
