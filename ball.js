import { gameBall } from './script.js'
 
let rotate = 0
export let bottom = 0
let gravity = 0.9
let isjumping = false

export const rotateBall = () => {
   setInterval(() => {
      rotate++

      gameBall.style.transform = `rotate(${rotate}deg)`

      if (rotate === 360) {
         rotate = 0
      }
   }, 1000/60)

   window.addEventListener('keydown', event => jumpBall(event))
}

const jumpBall = event => {
   if (isjumping) {
      return
   }

   if (event.key === 'ArrowUp'){ 

    let upJump =  setInterval(() => {
         if (bottom > 130) {
            clearInterval(upJump)
            
            let down = setInterval(() => {
               if (bottom < 6) {
                  clearInterval(down)

                  isjumping = false
               }
             
               bottom -= 5
               
               gameBall.style.bottom = `${bottom}px` 
               
            }, 1000/60)
         }

         isjumping = true

         bottom += 15
         bottom = bottom * gravity

         gameBall.style.bottom = `${bottom}px` 
      }, 1000/60)
   }
}

