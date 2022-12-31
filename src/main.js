const firstDice = document.querySelector(`#dice-1`)
const secondDice = document.querySelector(`#dice-2`)
const editNamesBtn = document.querySelector('#editNames')
const rollDiceBtn = document.querySelector(`#rollDice`)
const mainTitle = document.querySelector(`#title`)
let playerOneName = 'Player 1'
let playerTwoName = 'Player 2'

const editPlayerNames = (playerId) => {
    let player = prompt(`Please enter player ${playerId} name:`, '');
    if (player === '') {
        alert('player name can not be empty')
        editPlayerNames(playerId)
    } else if (player) {
        document.querySelector(`#player-${playerId}`).innerHTML = `<p class="player-name">${player}</p>`
        if (playerId === 1) {
            playerOneName = player
        }
        else if (playerId === 2) {
            playerTwoName = player
        }
    }
}

const editNames = () => {
    editPlayerNames(1)
    editPlayerNames(2)
}

const renderImages = (id) => {
    return `<img class="dice-image" alt="dice-${id}" src="src/Images/dice-${id}.png" width="150" height="150"/>`
}

const rollDice = () => {
    let a = Math.random() * 6 + 1
    let b = Math.random() * 6 + 1
    a = Math.floor(a)
    b = Math.floor(b)
    firstDice.innerHTML = renderImages(a)
    secondDice.innerHTML = renderImages(b)
    checkWin(a,b)
}

const checkWin = (a,b) => {
    if (a === b){
        mainTitle.innerHTML = 'Draw !'
        return
    }
    a > b ? mainTitle.innerHTML = playerOneName + ' Won !' : mainTitle.innerHTML = playerTwoName + ' Won!'
}

const setEvents = () => {
    editNamesBtn.addEventListener('click', editNames)
    rollDiceBtn.addEventListener('click', rollDice)
}

const init = () => {
    setEvents()
    firstDice.innerHTML = renderImages(1)
    secondDice.innerHTML = renderImages(1)
}

init()