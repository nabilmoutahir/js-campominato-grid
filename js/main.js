// * recupero elementi

// button
const buttonStartElement = document.getElementById('play-btn')
console.log (buttonStartElement)

// container
const gridGameElement = document.getElementById('game-grid')
console.log(gridGameElement)

// event listener start game
buttonStartElement.addEventListener('click', function (){
    generateGrid ('gridGameElement')
})
