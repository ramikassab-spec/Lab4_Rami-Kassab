/* Lösning till Uppgift 3. Av Rami Kassab, 2026 */

"use strict";

const ålder = 33;
if (ålder < 18) {
    console.log("Barn.");
} else if (ålder >= 18 && ålder < 65) {
    console.log("Vuxen.");
} else {
    console.log("Pensionär.");
}