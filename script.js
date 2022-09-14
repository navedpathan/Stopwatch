// function()  -----   ()=> 

                        //   STOPWATCH

hr = min = sec = ms = "0" + 0;


document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);

function start() {

 startTimer = setInterval(() => {
    ms++
    ms = (ms < 10? "0":"") + ms;
    
    if(ms == 100){
        sec++
        ms = "0" + 0;
        sec = (sec < 10? "0":"") + sec;
    }

    if(sec == 60){
        min++
        sec = "0" + 0;
        min = (min < 10? "0":"") + min;
    }

    if(min == 60){
        hr++
        min = "0" + 0;
        hr = (hr < 10? "0":"") + hr;
    }
    putValue();
   }, 10);  // 1000ms = 1sec
}

function putValue(){
    document.getElementById("milliseconds").innerHTML = ms;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("hours").innerHTML = hr;
}
 
function stop() {
    clearInterval(startTimer);
}

function reset() {
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0; 
    putValue();
}
