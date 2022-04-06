import { bottom } from "./ball.js"

export let scores = 0

const getRandomNumberBetween = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const getRandomSpeed = (min,max) => {
    return parseFloat(Math.random() * (max - min) + min).toFixed(2)
} 

const valuesBox = Array.from(Array(30), () => ({
        height: getRandomNumberBetween(20, 60),
        speed: getRandomSpeed(2.0, 0.5),
        delay: getRandomNumberBetween(0, 55)
    }))

export const createBox = () => {
    valuesBox.forEach(item => {
        setTimeout(() => {

            let move = 0

            const game = document.querySelector('.game-item')
            const gameBox = document.createElement('div')
            gameBox.classList.add('game__box')

            const moveBox = setInterval(() => {

                if (move > 385 && move < 470 && bottom < 60) {
                    clearInterval(moveBox)

                    setTimeout(() => {
                        window.location.reload()

                        alert(`Game Over! Your Score: ${scores}`)
                    }, 200);
                }

                if (move > 950) { 
                    clearInterval(moveBox)

                    addPoint() 
                 }

                move += 5 * item.speed

                gameBox.style.height = item.height
                gameBox.style.right = move

            }, 1000 / 60);

            game.appendChild(gameBox)

        }, item.delay * 1000)
    })
}

const addPoint = () => {
    const score = document.querySelector('.score')
    scores++
    score.textContent = `Score: ${scores}`
}
