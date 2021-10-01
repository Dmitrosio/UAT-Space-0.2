// Dmitrii Orlov
let currTime = 50;
setTimeout(CountDown, 0000)
setTimeout(CountDown, 5000)
setTimeout(CountDown, 10000)
setTimeout(CountDown, 15000)
setTimeout(CountDown, 20000)
setTimeout(CountDown, 25000)
setTimeout(CountDown, 30000)
setTimeout(CountDown, 35000)
setTimeout(CountDown, 40000)
setTimeout(CountDown, 45000)
setTimeout(CountDown, 50000)

function CountDown(){//Defining the function for a countdown
        if(currTime == 0){//If statement is true gives the laert box and changes the countdown to given line
                alert("Blastoff");
                document.getElementById("counter").innerHTML = ("Countdown: "+ currTime);
                document.getElementById("counter").innerHTML = ("Gone to space, will be back soon!");
        }
        else{//When the conditon is false it keeps showing the countdown number till condition is true
                document.getElementById("counter").innerHTML = ("Countdown: "+ currTime);
        }
        currTime -= 5;
}

function changeColor(newColor){//This is the function that changes the color of the countdown
        let elem = document.getElementById("counter");
        elem.style.color = newColor;
}