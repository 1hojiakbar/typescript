"use strict";
// *11 Narrowing 
function findType(value) {
    if (typeof value === "string") {
        // Bu yerda TypeScript 'value'ni string deb biladi
        console.log(value.toUpperCase()); // harflarni katta harfga aylantiradi
    }
    else {
        // Bu yerda TypeScript 'value'ni number deb biladi
        console.log(+value.toFixed(2)); // soning ikkita raqamini ko'rsatadi
    }
}
findType("Hello"); // "HELLO"
findType(42.123); // "42.12"
// -------------------------------
