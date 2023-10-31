// const a = 3 + 3
// console.log(a)

// const fet = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json,"bhag"))
// console.log(fet);

// console.log("lllll");

const randomNumber = parseInt((Math.random() * 100) + 1)
console.log(randomNumber)
const userInput = document.querySelector('#guessField')
const submit = document.querySelector("#subt")
const lowOrHi = document.querySelector(".lowOrHi")
const slotGuess = document.querySelector(".guesses")
const remainingGuess = document.querySelector(".lastResult")
const result = document.querySelector(".resultParas")
let p = document.createElement('p')
console.log(slotGuess,remainingGuess.innerHTML);
let arr =[]
let playGame = true


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validate(guess)
    })
}


function validate(guess){
    if(isNaN(guess)){
        alert(`Not a valid Input ${guess}`)
    }else if(guess > 100){
        alert("Entered guess is greater than 100")
    }else if(guess < 1){
        alert("Entered guess is less than 1")
    }else{
            arr.push(guess)
            console.log(arr.length)
            displayGuess(guess)
            checkGuess(guess)
    }
}

function displayGuess(guess){
    userInput.value = ""
    if(arr.length <= 10){
    slotGuess.innerHTML = slotGuess.innerHTML + `${guess} `
    remainingGuess.innerHTML = parseInt(remainingGuess.innerHTML) - 1
    }else{
        endGame()
    }
}

function checkGuess(guess){
    if(guess > randomNumber ){
        displayMessage("Number is too high")
    }else if(guess < randomNumber){
        displayMessage("Number is too low")
    }else if(guess === randomNumber){
        displayMessage("Your guess is correct")
        endGame()
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = message
    lowOrHi.style.backgroundColor = "red"
}
function endGame(){
    userInput.setAttribute('disabled', '')
    playGame = false
    // arr = []
    
    p.id = "startGame"
    p.innerHTML = 'Start game'
    result.appendChild(p)
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#startGame")
    newGameButton.addEventListener("click",function(){
        console.log("mmm")
        playGame = true
        arr = []
        userInput.removeAttribute('disabled');
        // result.removeChild(p)
        newGameButton.remove()
        // result.removeChild(p);
        slotGuess.innerHTML = ""
        remainingGuess.innerHTML = 10
    })
}



