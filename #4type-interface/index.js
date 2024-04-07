"use strict";
// type | interface
let language = "uzbek";
const data = [
    { value: "uzbek" },
    { id: 2, value: "english" },
    { id: 3, value: "rus" },
];
data.map((lang) => {
    language = lang.value;
});
