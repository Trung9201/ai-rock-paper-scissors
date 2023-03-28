const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const choices = ['rock', 'paper', 'scis']

const btnPlay = $('.btn-play')
const content = $('.content')
const resultTitle = $('.result')
const rock = $('#rock')
const paper = $('#paper')
const scis = $('#scis')
const compareTitle = $('.compare')

rock.onclick = () => {
    handlePlay('rock')
}
scis.onclick = () => {
    handlePlay('scis')
}
paper.onclick = () => {
    handlePlay('paper')
}

btnPlay.onclick = () => {
    btnPlay.style.display = 'none'
    content.style.display = 'block'
}

function computerChoices() {
    return choices[Math.floor(Math.random() * 3)]
}

function updateResultTitle(result) {
    switch (result) {
        case 'tie':
            resultTitle.textContent = 'This is a tie!'
            resultTitle.style.color = 'white'
            break;
        case 'computer':
            resultTitle.textContent = 'Computer win the game!'
            resultTitle.style.color = 'red'
            break;
        case 'player':
            resultTitle.textContent = 'Player win the game!'
            resultTitle.style.color = 'green'
            break;
        default:
            break;
    }
}

function updateCompare(playerSelect, computerSelect) {
    if (playerSelect === 'rock' && computerSelect === 'rock') {
        compareTitle.textContent ='the player chooses: 👊 and the computer chooses: 👊'
    }
    if (playerSelect === 'paper' && computerSelect === 'paper') {
        compareTitle.textContent ='the player chooses: 🖐️ and the computer chooses: 🖐️'
    }
    if (playerSelect === 'scis' && computerSelect === 'scis') {
        compareTitle.textContent ='the player chooses: ✌ and the computer chooses: ✌'
    }

    if (playerSelect === 'rock' && computerSelect === 'scis') {
        compareTitle.textContent ='the player chooses: 👊 and the computer chooses: ✌'
    }
    if (playerSelect === 'paper' && computerSelect === 'rock') {
        compareTitle.textContent ='the player chooses: 🖐️ and the computer chooses: 👊'
    }
    if (playerSelect === 'scis' && computerSelect === 'paper') {
        compareTitle.textContent ='the player chooses: ✌ and the computer chooses: 🖐️'
    }

    if (computerSelect === 'rock' && playerSelect === 'scis') {
        compareTitle.textContent ='the player chooses: ✌ and the computer chooses: 👊'
    }
    if (computerSelect === 'paper' && playerSelect === 'rock') {
        compareTitle.textContent ='the player chooses: 👊 and the computer chooses: 🖐️'
    }
    if (computerSelect === 'scis' && playerSelect === 'paper') {
        compareTitle.textContent ='the player chooses: 🖐️ and the computer chooses: ✌'
    }
}

function compareSelect(computerSelect, playerSelect) {
    if (computerSelect === 'paper' && playerSelect === 'paper' || computerSelect === 'rock' && playerSelect === 'rock' || computerSelect === 'scis' && playerSelect === 'scis') {
        updateResultTitle('tie')
    }
    if (computerSelect === 'paper' && playerSelect === 'rock' || computerSelect === 'rock' && playerSelect === 'scis' || computerSelect === 'scis' && playerSelect === 'paper') {
        updateResultTitle('computer')
    }
    if (playerSelect === 'paper' && computerSelect === 'rock' || playerSelect === 'rock' && computerSelect === 'scis' || playerSelect === 'scis' && computerSelect === 'paper') {
        updateResultTitle('player')
    }
}

function handlePlay(playerChoices) {
    const computerSelect = computerChoices()
    compareSelect(computerSelect, playerChoices)
    updateCompare(playerChoices, computerSelect)
}