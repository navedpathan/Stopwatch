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

                        // TIMER

let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");

h.value = m.value = s.value = "0" + 0;

document.getElementById('startt').addEventListener('click', ()=>{
    
    startTimers = setInterval(() => {
        if(h.value == 0 && m.value == 0 && s.value == 0){
                h.value = "0" + 0;
                m.value = "0" + 0;
                s.value = "0" + 0;
                document.querySelector("#t-display").style.display = "none";
                document.querySelector("#buttonn").style.display = "none";
                let text = document.querySelector("h1").innerHTML
                document.querySelector("h1").innerHTML = text.replace("TIMER", "TIME-UP!")
                document.querySelector("h1").style.fontSize = "7rem";
                
                
            } else if(s.value != 0){
                s.value--;
                s.value = (s.value < 10? "0":"") + s.value;
            
            } else if(m.value != 0 && s.value == 0){
                s.value = 59;
                m.value--;
                m.value = (m.value < 10? "0":"") + m.value;
                
            } else if(h.value != 0 && m.value == 0){
                m.value = 59;
                h.value--;
                h.value = (h.value < 10? "0":"") + h.value;
            }

        }, 1000);
    })
    

    document.getElementById("stopp").addEventListener('click', ()=> {
        clearInterval(startTimers);          
    })
    
    document.getElementById('resett').addEventListener('click', ()=> {
        h.value = m.value = s.value = "0" + 0;
        clearInterval(startTimers);
    })
    