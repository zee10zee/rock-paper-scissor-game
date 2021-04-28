var playerChoices = document.querySelectorAll('.choice')

var options = ['rock', 'paper', 'scissors']
var gameRound = 0;
var playerWins = 0;
var computerWins = 0;

// clicking on on a choice !
for(var i = 0; i < playerChoices.length; i++){
    playerChoices[i].addEventListener('click', function(e){
    var button = this
         playerSelect(button)
        var computerChoice = computerSelect()
        const chose = document.getElementsByClassName('chose')[1]
        chose.textContent = 'computer chose ' + computerSelect()
        result(button, computerChoice)
        gameRound = gameRound + 1;
        GameRoundDiv.innerHTML = 'game Round : ' + gameRound
        document.getElementsByClassName('container')[0].classList.add('animate')
        document.getElementsByClassName('playAgain')[0].style.display = "block"
    })
}


// player choice
function playerSelect(btn){
    console.log('you chose ' + btn.textContent)
    const chose = document.getElementsByClassName('chose')[0]
    chose.textContent = 'you chose ' + btn.textContent
}


// computer choice
function computerSelect(){
    // make a random number
    const randomNo = Math.floor(Math.random() * options.length);
    console.log('computer chose ' + options[randomNo])
    return options[randomNo]
}



// who wins

function result(pchoice, cChoice){
    console.log(pchoice.textContent, cChoice)
    const playerChoice = pchoice.textContent
    if(playerChoice === cChoice){
        console.log('you both chose ' + playerChoice)
        winnerDiv.innerHTML = 'you both chose ' + playerChoice
    }
    else if(playerChoice == 'rock' && cChoice == 'paper' || 
        playerChoice == 'paper' && cChoice == 'scissors' || 
        playerChoice == 'scissors' && cChoice == 'rock' ){
        console.log('computer wons ! bcoz '  +cChoice  +  ' wins against ' + playerChoice)
        winnerDiv.innerHTML = 'computer wons ! bcoz '  +cChoice  +  ' wins against ' + playerChoice
        computerWins++
    }else{
        console.log('player wons ! bcoz '  +playerChoice  +  ' wins against ' + cChoice)
        winnerDiv.innerHTML = 'player wons ! bcoz '  +playerChoice  +  ' wins against ' + cChoice
        playerWins++
    }
    computerWinningCount.textContent = 'computer wins : ' + computerWins
    playerWinningCount.textContent = 'Player Wins :' + playerWins

    console.log(playerChoice, cChoice)
    var gameResultCoitainer = document.getElementsByClassName('gameResult')[0]
    gameResultCoitainer.append(winnerDiv)
    gameResultCoitainer.append(computerWinningCount)
    gameResultCoitainer.append(playerWinningCount)
    gameResultCoitainer.prepend(GameRoundDiv)
}

var winnerDiv = document.createElement('div')
var GameRoundDiv = document.createElement('div')
var playerWinningCount = document.createElement('div')
var computerWinningCount = document.createElement('div')

function resetGame(){
    // /refresh the page !
    var container = document.getElementsByClassName('container')[0]
    container.style.display = "none"
    var realWinner = document.getElementsByClassName('allRoundWinner')[0]
    var winner = ''
    playerWins > computerWins ? winner = 'YOU !' : winner = 'THE COMPUTER!'
    realWinner.textContent = "The All round Winner is : " + winner
    realWinner.style.display = "block"
    setTimeout(() => {
        realWinner.style.display= "none"
    }, 2000);

    setTimeout(() => {
        window.location.reload()
    }, 2100);
}



// all round winner



