"use strict";
// Function in the TS
// function body
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
}
console.log(add(5, 10)); // 15
console.log(add("Hello, ", "World!")); // Hello, World!
