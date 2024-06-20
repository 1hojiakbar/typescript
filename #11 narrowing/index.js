"use strict";
// #11 Narrowing
// function findType(value: string | number) {
//   if (typeof value === "string") {
//     // Bu yerda TypeScript 'value'ni string deb biladi
//     console.log(value.toUpperCase()); // harflarni katta harfga aylantiradi
//   } else {
//     // Bu yerda TypeScript 'value'ni number deb biladi
//     console.log(+value.toFixed(2)); // soning ikkita raqamini ko'rsatadi
//   }
// }
// findType("Hello"); // "HELLO"
// findType(42.123); // "42.12"
// -------------------------------
// interface Square {
//   kind: "square";
//   size: number;
// }
// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }
// type Shape = Square | Rectangle;
// function getArea(shape: Shape): number {
//   if (shape.kind === "square") {
//     // Bu yerda TypeScript 'shape'ni Square deb biladi
//     return shape.size * shape.size;
//   } else {
//     // Bu yerda TypeScript 'shape'ni Rectangle deb biladi
//     return shape.width * shape.height;
//   }
// }
// const mySquare: Square = { kind: "square", size: 10 };
// const myRectangle: Rectangle = { kind: "rectangle", width: 5, height: 10 };
// console.log(getArea(mySquare)); // 100
// console.log(getArea(myRectangle)); // 50
