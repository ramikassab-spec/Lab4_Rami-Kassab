'use strict';


// Skriv en funktion som tar ett tal som parameter och skriver ut multiplikationstabellen för det talet från 1 till 10.
function skrivMultiplikationstabell(tal) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + " * " + tal + " = " + (i * tal));
    }
}

skrivMultiplikationstabell(5);
