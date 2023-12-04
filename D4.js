/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const area = (l1, l2) => {
  return l1 * l2;
};
console.log(area(7, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = (a, b) => {
  if (a == b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
};
console.log(crazySum(5, 5));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = (a) => {
  if (a > 19) {
    return (a - 19) * 3;
  } else {
    return a - 19;
  }
};
console.log(crazyDiff(18));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = (a) => {
  if (a >= 20 && (a <= 100) | (a == 400)) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(401));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = (str, check) => {
  let string = str;
  let magicWord = check;
  if (string.substring(0, magicWord.length) === magicWord) {
    return string;
  } else {
    // avrei potuto attenermi strettamente alla consegna e storare la parola "EPICODE" dentro magicWord
    let allTogether = magicWord.concat(" ", string); // ma in questa maniera la funzione è dinamica, può sempre essere utilizzata in tutto il codice
    return allTogether; // secondo parametri che vengono forniti man mano e che quindi possono sempre cambiare
  }
};
console.log(epify("ha i migliori prof", "EPICODE"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = (n) => {
  if (n % 7 == 0) {
    return "Il numero fornito è multiplo di 7";
  } else if (n % 3 == 0) {
    return "Il numero fornito è multiplo di 3";
  } else {
    return "errore: il numero fornito non rientra tra i multipli di 3 o di 7";
  }
};
console.log(check3and7(50));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = (str) => {
  let string = str;
  let strArr = string.split("");
  strArr.reverse(strArr.length);
  return strArr.join("");
};
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
