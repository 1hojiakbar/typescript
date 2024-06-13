"use strict";
// Function in the TS
const getData = (prop, ...rest) => {
    console.log(rest);
    return {
        sum: 1,
        list: [1, 2, 3, 4],
    };
};
console.log(getData({ a: 12, list: [1, 2, 3] }, "a", "b"));
