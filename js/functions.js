// funzione genera gliglia
function generateGrid (container) {

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

// funzione genera cella
function generateCell (Text) {

    // creo elemento html
    const cell = document.createElement('div');
    // aggiungo classi
    cell.classList.add('cell');
    
    cell.innerText = Text;

    cell.addEventListener ('click', function (){
        // comando per cambiare colore 
        this.classList.toggle('active')
    });

    // ritorno valore
    return cell;
}