/* Lösning till Uppgift 9. Av Rami Kassab, 2026 */
"use strict";

const people = [
    { name: "Rami", age: 33, city: "Helsingborg" },
    { name: "Sara", age: 29, city: "Halmstad" },
    { name: "Elias", age: 7, city: "Malmö" },
    { name: "Ella", age: 3, city: "Göteborg" }
];

function displayPerson(person) {
    console.log(person.name + " bor i " + person.city + " och är " + person.age + " år gammal.");
    if (person.age >= 18) {
        console.log("Personen är myndig.");
    } else {
        console.log("Personen är inte myndig.");
    }
    console.log("--------------------");
}


for (let i = 0; i < people.length; i++) {
    displayPerson(people[i]);
}