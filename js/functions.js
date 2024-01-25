// funzione genera gliglia        PT2 
function generateGrid (container, bombsGen) {

    // svuoto HTML del container
    gridGameElement.innerHTML = '';

    // loop per ogni cella
    for (let i = 1; i <= 100; i++) {
       
        // genero cella tramite invocazione funzione generateCell
        cellElement = generateCell(i);

        // inserisco celle nel container
        gridGameElement.append(cellElement);
    }
}

// funzione genera cella        PT2
function generateCell (Text) {

    // creo elemento html
    const cell = document.createElement('div');
    // aggiungo classi
    cell.classList.add('cell');
    
    cell.innerText = Text;

    cell.addEventListener ('click', function (){
        // comando per cambiare colore 
        this.classList.toggle('active')

        // stampo numero clickato
        console.log('il numero clickato è : ' + cell.innerText)
    });

    console.log('bombsGen')

    // ritorno valore
    return cell;
}


// * parte 2 GENERO FUNZIONE ARRAY DI NUMERI CASUALI
bombsGen = generateBombsArray()
// creo array
function generateBombsArray () {

    let bombsArray = [];

    // finché l'array non arriva a 16
    while (bombsArray.length < 16) {
        // creo un numero random
        let randomNum = Math.floor(Math.random() * 100) + 1;
        // se l'array non include un determinato numero
        if (!bombsArray.includes(randomNum)) {
            // lo aggiungo
            bombsArray.push(randomNum)
        }
    }
    // stampo array
    let bombs = bombsArray
    console.log(bombs)

    return bombsArray
}

