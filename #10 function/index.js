"use strict";
// Function in the TS
const getData = (prop) => {
    return new prop().getFullYear();
};
console.log(getData(Date)); // 2024
