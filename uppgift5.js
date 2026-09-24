/* Lösning till Uppgift 5. Av Rami Kassab, 2026 */
"use strict";

const maträtter = ["Köttbullar", "Pannkakor", "Pizza", "Sushi", "Tacos"];
console.log(maträtter); // ["Köttbullar", "Pannkakor", "Pizza", "Sushi", "Tacos"]
console.log(maträtter[0]); // Köttbullar
console.log(maträtter[4]); // Tacos
maträtter.push("Lasagne");
console.log(maträtter); // ["Köttbullar", "Pannkakor", "Pizza", "Sushi", "Tacos", "Lasagne"]
maträtter.shift();
console.log(maträtter); // ["Pannkakor", "Pizza", "Sushi", "Tacos", "Lasagne"]