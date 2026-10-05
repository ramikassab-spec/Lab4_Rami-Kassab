/* Lösning till Uppgift 2. Av Rami Kassab, 2026 */

"use strict";
const price = 100;
const quantity = 3;
const total = price * quantity;
const totalWithTax = total * 1.25; // Lägger till 25% moms

console.log("pris: " + price + " kr");
console.log("antal: " + quantity);
console.log("Totalpris: " + total + " kr");
console.log("Totalpris med moms: " + totalWithTax + " kr");