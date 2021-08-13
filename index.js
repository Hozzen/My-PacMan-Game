// Giving it 28 square wide

const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
let squares = []
let score = 0

// 28*28 = 784
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
const layout = [
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

// create board

function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1 ) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3 ) {
            squares[i].classList.add('power-pellet')
        }
    }
}
createBoard()

// down - 40
// up key - 38
// left - 37
// right - 39

// starting position of pacman 

let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add('pacman')

function control(e) {
    // if (e.keyCode === 40) {
    //     console.log('pressed down')
    // } else if (e.keyCode === 38) {
    //     console.log('pressed up')
    // } else if (e.keyCode === 37) {
    //     console.log('pressed left')
    // } else if (e.keyCode === 39) {
    //     console.log('pressed right')
    // }
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch(e.keyCode) {
        case 40:

        if (
            !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
            pacmanCurrentIndex + width < width * width) 
            pacmanCurrentIndex += width
        break
        case 38:

        if (
            !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
            pacmanCurrentIndex - width >=0) 
            pacmanCurrentIndex -=width
        break
        case 37:

        if(
            !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
            pacmanCurrentIndex % width !== 0)
            pacmanCurrentIndex -=1
            if (pacmanCurrentIndex === 364) {
                pacmanCurrentIndex = 391
            }
        break
        case 39:

        if (
            !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair') &&
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            pacmanCurrentIndex % width < width -1) 
            pacmanCurrentIndex +=1
            if (pacmanCurrentIndex === 391) {
                pacmanCurrentIndex = 364
            }
        break
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten()
    powerPelletEaten()
    checkForWin()
    checkForGameOver()
}
document.addEventListener('keyup', control)


function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score++
        scoreDisplay.textContent = score
    }
}

function powerPelletEaten() {
    // if square pacman is in contains a power pellet
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {

        // removing class of power-pellet from square
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        //add a score of 10
        score += 10
        //change each of the four ghost to isScared
        ghosts.forEach(ghost => ghost.isScared = true)
        // use the setTimeout to unscare ghosts after 10 seconds
        setTimeout(unScareGhosts, 10000)
    }

}

function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}

class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

//drawn my ghosts onto my grid

ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})
// move the ghosts 

ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost (ghost) {
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
        // all our code
        // if the next square does NOT contain a wall and does not contains a ghost 
        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
        // remove any ghost class 
        squares[ghost.currentIndex].classList.remove(ghost.className)
        squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
        // add direction to current Index 
        ghost.currentIndex += direction
        // add ghost class 
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
        } else direction = directions[Math.floor(Math.random() * directions.length)]

        // if the ghost is currently scared
        if (ghost.isScared) {
            square[ghost.currentIndex].classList.add('scared-ghost')
        }

        // if the ghost is currently scared AND pacman is on it
        if (ghost.isScared && ghost[currentIndex].classList.contains('pacman')) {
            //remove classnames -ghost.className, 'ghost', 'scared-ghost'
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            // change ghosts currentIndex back to its startIndex
            ghost.currentIndex = ghost.startIndex
            // add a score of 100
            score += 100
            // re-add classnames of ghost.className and 'ghost' to the ghost new position
            sqaures[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        
    }, ghost.speed)

}

// check for game over
function checkForGameOver () {
    // if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
    !squares[pacmanCurrentIndex].classList.contains('scared-ghost') 
    ) {
        //for each ghost - we need to stop it moving
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        //remove eventListener from our control function
        document.removeEventListener('keyup', control)
        //tell user the game is over
        scoreDisplay.textContent = 'YOU LOSE !'
    }
    

}

// check for win

function checkForWin() {
    if (score === 274) {
        // stop each ghost moving 
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        // remove the eventListener for the control function
        document.removeEventListener('keyup', control)
        // tell our user we have won
        scoreDisplay.textContent = 'YOU WON !'
    }
}
