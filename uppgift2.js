/* Lösning till Uppgift 2. Av Rami Kassab, 2026 */

"use strict";
const price = 100;
const quantity = 3;
const total = price * quantity;
const totalWithTax = total * 1.25; // Lägger till 25% moms

console.log("Pris: " + price + " kr");
console.log("Antal: " + quantity);
console.log("Totalt: " + total + " kr");
console.log("Totalt inklusive moms: " + totalWithTax + " kr");