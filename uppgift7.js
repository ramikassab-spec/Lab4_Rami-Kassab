/* Lösning till Uppgift 7. Av Rami Kassab, 2026 */
"use strict";



const tal = [5, 10, 3, 8, 22, 30];
function calculateSum(tal) {
    let sum = 0;
    for (let i = 0; i < tal.length; i++) {
        sum = sum + tal[i];
    }
    return sum;
}
console.log(calculateSum(tal)); // 78
