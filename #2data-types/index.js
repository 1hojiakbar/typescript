"use strict";
// *data types: string, number, bigInt, null undefined, symbol, boolean
// Basic Syntax and rules
// let title = "data types";
// title = 777; // => error
// malumotlar turlarini boshlang'ish qiymat turini keyinchalik boshqa turga mansub qiymatga belgilab ketish mumkin emas
// console.log(title);
// *Primitive data types usage
// String
// let str: string = "abc"; // success
// let strs: string = 123; // error
// ===================
// Number
// let num: number = "abc"; // => error
// let nums: number = 123; // => success
// ===================
// BigInt
// let big: bigint = 123n; // bigInt ES2020-version"da chiqani uchun ES2020"dan oldingi versiyalar buni qo'llab quvatlamaydi
// big = 123 // error
// big = 123n // success
// ===================
// null & undefined
// let nums: number = 123;
// nums = undefined;
// Agar biz "tsconfig.json" file ichidan strict malumotini comment"ga olib qo'ysak
// biz hohlagan o'zgaruvchimizga null va undefined qiymatini biriktirib ketishimiz mumkin bo'ladi aks holda bizga error beradi
// console.log(nums);
// Lekin agar keyinchalik strict malumotiga ehtiyoj sezsak uni yoqib o'rniga
// strictNullChecks comment"dan chiqarib qo'yishimiz bizga huddi usha imkonyat ya'ni
// null va undefined"ni hohlagan o'zgaruvchimizga biriktirish imkonini beradi.
// Example:
// let und = null;
// und = undefined;
// console.log(und); // undefined
// ===================
// Symbol
// let sym: symbol = Symbol("id:1");
// sym = null; // error
// sym = Symbol("id:2"); // success
// console.log(sym); // id:2
// ===================
// Boolean
// let bool: boolean = true;
// bool = 12; // error
// bool = false; // success
// console.log(bool); // false
// ================================================
// Non-Primitive data types usage
// Object
let obj = { age: 12 };
// obj.age = "abc"; // error
obj = { age: 16 };
console.log(obj); // { age: 16 }
