"use strict";
// type | interface
// #discription: Biz TypeScript-dagi "type" kalit so'z orqali ma'lumotlar shaklini aniqlash uchun foydalanishimiz mumkin.
let language = "rus";
const data = [
    { value: "uzbek" },
    { id: 2, value: "english" },
    { id: 3, value: "rus" },
];
data.map((lang) => {
    language = lang.value;
});
