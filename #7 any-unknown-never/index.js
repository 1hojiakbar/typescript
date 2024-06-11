"use strict";
// Any
// let a: any;
// a = 5; // number type
// a = "Hello"; // string type
// a = true; // boolean type
// ------------------
// unknown
function getMessage(input) {
    if (typeof input === "string") {
        console.log(`String input: ${input.toUpperCase()}`);
    }
    else if (typeof input === "number") {
        console.log(`Number input: ${input.toFixed(2)}`);
    }
    else {
        console.log(`Unknown type: ${input}`);
    }
}
getMessage("Hello");
getMessage(3.1415);
getMessage(true);
// ------------------
// never
function throwError(message) {
    throw new Error(message); // Bu funksiya hech qachon tugamaydi, chunki u har doim xato tashlaydi
}
let a; // this variable never get the value
