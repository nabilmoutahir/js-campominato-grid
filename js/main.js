// * recupero elementi

// button
const buttonStartElement = document.getElementById('play-btn')
console.log (buttonStartElement)

// container
const gridGameElement = document.getElementById('game-grid')
console.log(gridGameElement)

// counter
const pointCounter = document.getElementById('points')

// event listener start game
buttonStartElement.addEventListener('click', function (){
    generateGrid ('gridGameElement', bombsGen)

    // PT2 FUNZIONE ARRAY
   bombsGen
   console.log(bombsGen)
})
