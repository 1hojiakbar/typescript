"use strict";
// #8 Basic object
let obj = {
    id: 1,
    name: "Eshmat",
    status: "developer",
    student: true,
    // year is optional property
};
let obj2 = {
    id: 1,
    name: "Eshmat",
    status: "developer",
    student: ["hello world"],
    year: 2024,
};
// delete obj.name // error: The operand of a 'delete' operator cannot be a read-only property
