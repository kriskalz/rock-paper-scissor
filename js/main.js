const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

//Start the Game

//  const startGame = () => {
//     const playBtn = document.querySelector(".intro button");
//     const introScreen = document.querySelector(".intro");
//     const selections = document.querySelector(".selection");

//     playBtn.addEventListener("click", () => {
//       introScreen.classList.add("fadeOut");
//       selections.classList.add("fadeIn");
      
//     });
// };

const SELECTIONS = [
    {
        name: 'rock',
        img: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        img:  'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        img: 'scissors',
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

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner)incrementScore(computerScoreSpan)
}

// here below is the function for the increase in score based on winner 

function incrementScore(ScoreSpan){
    ScoreSpan.innerText = parseInt(ScoreSpan.innerText) + 1
}


// here the function for displaying the most recently in an order from above to below

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.img
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}


// function for displaying the winner below 

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}


// random selection function by the computer below

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}
