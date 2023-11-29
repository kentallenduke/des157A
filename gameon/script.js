//Global variables
difficulty = "normal";
curClicked = 0;
numFound = 0;
numItems = 0;
const limitTime = 30000;
//const limitTime =9000000000; /*debug*/
timeRemaining = limitTime;

(function(){
    'use strict';
    console.log("reading js file");  

    document.getElementById("game").style.visibility = "hidden";
    document.getElementById("finish").style.visibility = "hidden";

    for(let b of document.querySelectorAll("#start-buttons button"))
    {
        b.addEventListener("click", selectDifficulty);
    }
    for(let d of document.getElementsByClassName("retryBtn"))
    {
        d.addEventListener("click", function(){
            prepGame();
        });
    }
    for(let d of document.getElementsByClassName("quit"))
    {
        d.addEventListener("click", function(){
            location.reload();
        });
    }

})();

function selectDifficulty(element)
{
    if(element.target.classList.contains("easy"))
        difficulty = "easy";
    else if(element.target.classList.contains("medium"))
        difficulty = "normal";
    else
        difficulty = "hard";
    prepGame();
}

function prepGame()
{
    document.getElementById("game").style.visibility = "visible";
    document.getElementById("finish").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("github").style.display = "none";
    var itemTypes = ['circle','square','triangle', 'trapezoid', 'halfcircle'];
    timeRemaining = limitTime;
    if(difficulty == "easy")
        numItems = 100;
    else if(difficulty == "normal")
        numItems = 100;
    else if(difficulty == "hard") {
        numItems = 100;
    }
    
    var itemsList = [];
    for(let i = 0; i < numItems; i++)
    {
        if(i < numItems / itemTypes.length)
            itemsList.push(itemTypes[0]);
        else if (i < numItems / itemTypes.length * 2)
            itemsList.push(itemTypes[1]);
        else if (i < numItems / itemTypes.length * 3)
            itemsList.push(itemTypes[2]);
        else if (i < numItems / itemTypes.length * 4)
            itemsList.push(itemTypes[3]);
        else if (i < numItems / itemTypes.length * 5)
            itemsList.push(itemTypes[4]);
    }
    //for(let i of itemTypes)
    //    itemsList.push(i);
    shuffleArray(itemsList);
    
    //cache DOM element
    var shapesareaDom = document.getElementById("shapesarea");

    shapesareaDom.style.gridTemplateColumns = "repeat("+Math.sqrt(numItems)+", 1fr)";
    shapesareaDom.style.gridTemplateRows = "repeat("+Math.sqrt(numItems)+", 1fr)";

    
    for(let i = 0; i < numItems; i++)
    {
        let dom = document.createElement("div");
        let shape = itemsList.pop();
        let R = Math.random() * (230 - 50) + 50; 
        let G = Math.random() * (230 - 50) + 50; 
        let B = Math.random() * (230 - 50) + 50; 
        dom.classList.add(shape);
        dom.addEventListener("click", shapeClick);
        if(shape == "circle" || shape == "halfcircle" || shape =="square")
            dom.style.backgroundColor = "rgb("+R+", "+G+", "+B+")";
        if(shape == "trapezoid" || shape == "triangle") 
            dom.style.borderBottomColor = "rgb("+R+", "+G+", "+B+")"
        shapesareaDom.append(dom); 
    }

    if(difficulty == "hard") {
        for(let d of document.querySelectorAll("#shapesarea > div"))
            d.classList.add("hardmode");
    }

    gameStart();

}

function shuffleArray(array) 
{
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shapeClick(element)
{
    //we clicked on the same one
    
    if(curClicked == element.target)
    {
        
        curClicked.classList.remove("selected");
        curClicked = 0;
        return false;
        
        
       
    }
    //nothing is selected
    if(curClicked == 0)
    {
   
        (new Audio('audio/select.wav')).play();
        curClicked = element.target;
        curClicked.classList.add("selected");
        return;
    }
    //clicked on another shape
    if(curClicked != 0)
    {
        //is it the same type?
        //yes we got it right
        if(curClicked.classList.contains(element.target.classList[0]))
        {
            curClicked.classList.remove('selected');
            
            (new Audio('audio/match.wav')).play();
            curClicked.parentNode.insertBefore(document.createElement("div"),curClicked.nextSibling);
            curClicked.remove();

            element.target.parentNode.insertBefore(document.createElement("div"),element.target.nextSibling);
            element.target.remove();
            curClicked = 0;
            timeRemaining += 1000;
            numFound++;
            if(numFound >= numItems/2) //we win
            {
                
                (new Audio('audio/win.wav')).play();
                document.getElementById("game").style.visibility = "hidden";
                document.getElementById("finish").style.visibility = "visible";
                document.getElementById("start").style.visibility = "hidden";
                document.getElementById("github").style.display = "visible";

                document.getElementById("win").style.visibility = "visible";
                document.getElementById("lose").style.visibility = "hidden";

                document.getElementById("score").innerHTML = limitTime-(limitTime-timeRemaining);
            }
        }
        //wrong :(
        else
        {
            curClicked.classList.remove('selected');
            curClicked = 0;
            (new Audio('audio/notamatch.wav')).play();
        }
    }
}
function gameStart()
{

    setInterval(countdown, 10);
    //clearInterval(countdown)

}

function countdown()
{
    if(numFound >= numItems/2 || timeRemaining <= 0) //game over, stop timer
        return;
    timeRemaining -= 10; // decrement by 10 milliseconds
    document.getElementById("meteractive").style.width = timeRemaining/limitTime/2*100+"%";
    if(timeRemaining <= 0)
    {
        (new Audio('audio/lose.wav')).play();
        document.getElementById("game").style.visibility = "hidden";
        document.getElementById("finish").style.visibility = "visible";
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("github").style.display = "visible";

        document.getElementById("win").style.visibility = "hidden";
        document.getElementById("lose").style.visibility = "visible";
    }
}