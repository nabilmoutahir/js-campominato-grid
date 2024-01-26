# TRACCIA

Ciao ragazzi,
Esercizio di oggi: Campo Minato
nome repo: js-campominato-grid

Consegna
Partiamo da quanto fatto già ieri, quindi lavoriamo nella stessa repo.

Step 1) Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

Step 2) In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

Step 3) La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

Bonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.

Bonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

## SVOLGIMENTO

- genero array con 16 numeri casuali 

- inserisco array nell'event listener se:

    - clicko su una cella contenente un valore dell'array si colora di rosso e la partita termina

    - altrimenti si colora di azzurro e continua