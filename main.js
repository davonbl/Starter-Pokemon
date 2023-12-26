import getPokemon from "./poke-api.js";
import { getTime, getDate, getDay } from "./timer.js";

let test = await getPokemon()


console.log(test)


setInterval(() => {
  getTime()
  getDay()
  let removeChildren = document.querySelector('#app')
  const date = new Date()
  let updatedDate = date.getDate()
  // updatedDate = 27


  let storedDate;
  // debugger
  let presentItem = localStorage.getItem('storeDate')? true : false
  if(presentItem){
    storedDate = Number(JSON.parse(localStorage.getItem('storeDate')))
  }

  if((presentItem && storedDate !== updatedDate) || getTime() == '12:00:00 AM' || getTime() === '0:00:00 AM'){
    localStorage.clear()
    while (removeChildren.hasChildNodes()) {
      removeChildren.removeChild(removeChildren.firstChild);
    }
    test = getPokemon()
  }
}, 1000)
