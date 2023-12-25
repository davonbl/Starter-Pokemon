import getPokemon from "./poke-api.js";
import { getTime, getDate } from "./timer.js";

let test = await getPokemon()


console.log(test)


setInterval(() => {
  getTime()
  let removeChildren = document.querySelector('#app')
  const date = new Date()
  let updatedDate = date.getDate()
  updatedDate = 26


  let storedDate;
  let presentItem = localStorage.getItem('storeItem')? true : false
  if(presentItem){
    storedDate = JSON.parse(localStorage.getItem('storeDate'))
  }

  if((presentItem && storedDate !== updatedDate) || getTime() == '12:00:00 AM' || getTime() === '0:00:00 AM'){
    localStorage.clear()
    while (removeChildren.hasChildNodes()) {
      removeChildren.removeChild(removeChildren.firstChild);
    }
    test = getPokemon()
  }
}, 1000)
