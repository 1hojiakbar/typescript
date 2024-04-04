"use strict";
// Union
// union => o'zgaruvchiga birdan ko'p bo'lgan data turlarini biriktirish mumkin bo'lgan type"ni ifodalash.
// sring | number | etc.
// let str1: number = "123"; // error
// let str2: string | number = 123; // success
// console.log(str2); // 123
// #description biz | belgisidan foydalanib bir o'zgaruvchi 2ta va undan ko'proq boshqa turga mansub qiymatlarni
// qabul qilishini ifodalay olamiz
// ===================
// any
// let num: any = 123; // success
// let num2: any = "abc"; // success
// let num3: any = true; // success
// #description "any" kalit so'zi bizga hohlagan turdagi qiymatni qabul qiluvchi o'zgaruvchi yaratishga yordam beradi
// ===================
let language = "uzbek";
const data = [
    { id: 1, value: "uzbek" },
    { id: 2, value: "english" },
    { id: 3, value: "rus" },
];
data.map((lang) => {
    if (lang.value === "uzbek" ||
        lang.value === "english" ||
        lang.value === "rus")
        language = lang.value;
});
