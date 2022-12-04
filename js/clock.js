const clock = document.querySelector("#clock");

function clockTime(){
    const newClock = new Date();
    const Hours = String(newClock.getHours()).padStart(2, '0') ;
    const Minute = String(newClock.getMinutes()).padStart(2, '0');
    const Second = String(newClock.getSeconds()).padStart(2, '0');
    clock.innerText = `${Hours} : ${Minute} : ${Second}`;
}

clockTime();
setInterval(clockTime, 1000);