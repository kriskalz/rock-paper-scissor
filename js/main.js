const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const SELECTIONS = [
    {
        name: 'rock',
        img: 'https://www.rock-paper-scissors-game.com/i/rock.png',
        beats: 'scissors'
    },
    {
        name: 'paper',
        img:  'https://www.rock-paper-scissors-game.com/i/paper.png',
        beats: 'rocks'
    },
    {
        name: 'scissors',
        img: 'https://www.rock-paper-scissors-game.com/i/scissors.png',
        beats:'paper'
    }
]


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e =>{
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})


function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.img
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}