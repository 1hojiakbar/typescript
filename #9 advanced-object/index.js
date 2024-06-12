"use strict";
// Index Signatures
const obj = {
    id: 1,
    name: "Eshmat",
    age: 25,
};
const getData = (value) => {
    console.log(obj[value]);
};
getData("name"); // Eshmat
