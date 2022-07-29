const level = document.querySelectorAll('button')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let currentTime = 30
let timerSpeed = 1000
let timeId = null
let hitPosition

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole')
  })
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')
  hitPosition = randomSquare.id
  Math.random
}

Math.random
var audio = new Audio('./point.mp3')
audio.play()

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      audio.play()
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

level.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.id == 'level-up' && timerSpeed > 500) {
      timerSpeed = timerSpeed - 300
      console.log(timerSpeed)
      clearInterval(timeId)
      moveMole(timerSpeed)
    }
    if (btn.id == 'level-down' && timerSpeed < 1800) {
      timerSpeed = timerSpeed + 300
      console.log(timerSpeed)
      clearInterval(timeId)
      moveMole(timerSpeed)
    }
  })
})

function moveMole(timer) {
  timeId = setInterval(randomSquare, timer)
}
moveMole(1500)

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime + 's'
  if (currentTime == 0) {
    clearInterval(timeId)
    clearInterval(countDownTimerId)
    alert('GAME OVER! Your final score is ' + result)
  }
}

let countDownTimerId = setInterval(countDown, 1000)
