const clock = document.querySelector("#clock");

function handleHour(num){
    if(num >12){
        num = num -12;
        return `PM ${String(num).padStart(2,"0")}`;
    } else if(num === 12){
        return `PM ${String(num).padStart(2,"0")}`;
    } else if(num === 0){
        num = num + 12;
        return `AM ${String(num).padStart(2,"0")}`;
    } else{
        return `AM ${String(num).padStart(2,"0")}`;
    }
}

function getTime(){
    const date = new Date();
    const hours = handleHour(date.getHours());
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
