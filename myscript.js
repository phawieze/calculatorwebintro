console.log("hello world");


const screen = document.querySelector('.outputbox');
let firstNumber = 0;
let previousFunction = "";

function doClear (){
        screen.innerText = "0";
        firstNumber = 0;
        previousFunction = "";
    }

function doPlus (){
        firstNumber = firstNumber + parseInt(screen.innerText);
        previousFunction = "plus"
        screen.innerText = "0";
    }

function doMinus (){
        firstNumber = parseInt(screen.innerText) - firstNumber;
        previousFunction = "minus"
        screen.innerText = "0";
    }

function doMultiply (){
        firstNumber = parseInt(screen.innerText) * firstNumber;
        previousFunction = "multiply"
        screen.innerText = "0";
    }

function doCalcute()
{
    if (previousFunction === "plus"){
        firstNumber = firstNumber + parseInt(screen.innerText);
        screen.innerText = firstNumber;
        firstNumber = 0; 
    }
    if (previousFunction === "minus"){
        firstNumber = firstNumber - parseInt(screen.innerText);
        screen.innerText = firstNumber;
        firstNumber = 0; 
    }
    if (previousFunction === "multiply"){
        firstNumber = firstNumber * parseInt(screen.innerText);
        screen.innerText = firstNumber;
        firstNumber = 0; 
    }
}   
    
 
// EventListenerPart

document.addEventListener('click', function(event){
    
    if (event.target.matches(".number"))
    {
        if (screen.innerText === "0")  {
            screen.innerText = event.target.innerText;
        }
            else {
                screen.innerText = screen.innerText + event.target.innerText;
            }
    }

    if (event.target.matches(".clear")){
        doClear();
    }

    if (event.target.matches(".plus")){
        doPlus();
    }

    if (event.target.matches(".minus")){
        doMinus();
    }

    if (event.target.matches(".multiply")){
        doMultiply();
    }

    if (event.target.matches(".calcute")){
        doCalcute();

    }
})

 
