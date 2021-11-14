var [hour,minutes,seconds] = [0,0,0];
const tempo = 1000; //1 second
var cron;

function start(){ 
    if(!(hour != 0 || minutes != 0 || seconds != 0)) cron = setInterval(timer,tempo);
}

function pause(){clearInterval(cron);}

function stop(){
    const format = (hour < 10 ? '0' + hour : hour) + ":" + 
                 (minutes < 10 ? '0' + minutes : minutes) + ":" +
                 (seconds < 10 ? '0' + seconds : seconds);
    document.getElementById('result_antegior').innerHTML = "Último resultado: " + format;
    clearInterval(cron);
    [hour,minutes,seconds] = [0,0,0];
    document.getElementById('h1-Timer').innerText = "00:00:00";
}

function timer(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes ++;
        
        if(minutes == 60){
            minutes = 0;
            hour++;

            if(hour == 23){
                hour = 0;
            }
        }
    }
    
    const format = (hour < 10 ? '0' + hour : hour) + ":" + 
                 (minutes < 10 ? '0' + minutes : minutes) + ":" +
                 (seconds < 10 ? '0' + seconds : seconds);
    document.getElementById('h1-Timer').innerText = format;
}
