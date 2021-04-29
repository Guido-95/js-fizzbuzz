// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// contatore
var numeri;

for( numeri = 1; numeri <=100; numeri++) {
    // se è multiplo di 3 e 5 stampa FizzBuzz
    if(numeri % 3 == 0 && numeri % 5 == 0 ){
        console.log("FizzBuzz");
    // se è multiplo di 5 stampa Buzz
    } else if(numeri % 5 == 0){
        console.log("Buzz");
    // se è multiplo di 3 stampa Fizz
    }else if(numeri % 3 == 0){
        console.log("Fizz");
    // se non è multiplo di 3 e 5 stampa numero
    }else {
        console.log(numeri);
    }
    
}