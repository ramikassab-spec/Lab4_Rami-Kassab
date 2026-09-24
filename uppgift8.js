/* Lösning till Uppgift 8. Av Rami Kassab, 2026 */
"use strict";

const bok = {
    titel: "The Hobbit",
    författare: "J.R.R. Tolkien",
    utgivningsår: 1937,
    genre: "Fantasy",
    }  


function displayBookInfo(bok) {
    console.log("Titel: " + bok.titel);
    console.log("Författare: " + bok.författare);
    console.log("Utgivningsår: " + bok.utgivningsår);
    console.log("Genre: " + bok.genre);
}
displayBookInfo(bok);