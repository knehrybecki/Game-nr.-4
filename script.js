import { rotateBall } from './ball.js'
import { createBox, scores } from './box.js'

const main = document.querySelector('.main')

export const renderGame = () => {
    const mainText = document.createElement('div')
    mainText.classList.add('main__text')
    mainText.textContent = 'Press Any Key To Start'
    main.appendChild(mainText)
    
    const mainGame = document.createElement('div')
    mainGame.classList.add('main__game')
    main.appendChild(mainGame)

    const game = document.createElement('div')
    game.classList.add('game')
    mainGame.appendChild(game)

    const gameElement = document.createElement('div')
    gameElement.classList.add('game-item')
    game.appendChild(gameElement)

    const gameBall = document.createElement('div')
    gameBall.classList.add('game__ball')
    gameBall.textContent = 'K'
    gameElement.appendChild(gameBall)

    const ground = document.createElement('div')
    ground.classList.add('game__ground')
    game.appendChild(ground)

    const score = document.createElement('div')
    score.classList.add('score')
    score.textContent = `Score: ${scores}`
    ground.appendChild(score)
}

renderGame()

export const gameBall = document.querySelector('.game__ball')

const mainText = document.querySelector('.main__text')

const startGame = () => {
    mainText.style.visibility = 'hidden'

    window.removeEventListener('keypress', startGame)

    rotateBall()
    createBox()
}

window.addEventListener('keypress', startGame)
