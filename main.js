import getPokemon from "./poke-api";
import { getTime, getDate } from "./timer.js";

let test = await getPokemon()


// console.log(test)


setInterval(() => {
  getTime()
  let removeChildren = document.querySelector('#app')
  let testing = getDate()
  let newDate = new Date()
  let day = newDate.getDate()
  // console.log('day', testing.grabdate)
  // console.log('date', testing.day)
  // console.log('compare day', day)
  if(getTime() == '12:00:00 AM' || getTime() === '0:00:00 AM'){
    localStorage.clear()
    console.log(testing.date)
    console.log(testing.day)
    while (removeChildren.hasChildNodes()) {
      removeChildren.removeChild(removeChildren.firstChild);
    }
    test = getPokemon()
  }
}, 1000)
