function getHours(){
    const date = new Date();
    let hours = date.getHours();

    if(hours < 10){
        hours = '0' + hours;
    }else if(hours > 12){
        hours = hours - 12
    }
    return hours; 
}


function getMintues(){
    const date = new Date();
    let mintues = date.getMinutes();

    if(mintues < 10){
        mintues = '0' + mintues;
    }

    return mintues;

}

function getSeconds(){
    const date = new Date();
    let seconds = date.getSeconds();

    if(seconds < 10){
        seconds = '0' + seconds; 
    }

    return seconds; 

}

function getAmorPm(){
    const date = new Date();
    let hours = date.getHours();
    let amOrPm = 'AM';

    if(hours > 12){
        amOrPm = 'PM';
    }

    return amOrPm; 

}

export function getTime(){
    let hr = getHours();
    let min = getMintues();
    let sec = getSeconds();
    let amOrPm = getAmorPm();

    let time = `${hr}:${min}:${sec} ${amOrPm}`
    // console.log(time)
    
    return time;
}