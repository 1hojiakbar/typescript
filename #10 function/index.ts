// Function in the TS

// parametr / argument
// type Rest = {
//   sum: number;
//   list: number[];
// };

// type Prop = {
//   a: number;
//   list: number[];
//   b?: number;
// };

// const getData = (prop: Prop, ...rest: string[]): Rest => {
//   console.log(rest);
//   return {
//     sum: 1,
//     list: [1, 2, 3, 4],
//   };
// };

// console.log(getData({ a: 12, list: [1, 2, 3] }, "a", "b"));

// -----------------------------

// Call Signature

// interface Calc {
//   (a: number, b: number): number; // Call Signature
// }

// const add: Calc = (a, b) => a + b;
// const subtract: Calc = (a, b) => a - b;

// console.log(add(3, 1)); // 4
// console.log(subtract(4, 3)); // 1

// -----------------------------

// Constructor Signature

// interface Prop {
//   new (): Date;
// }

// const getData = (prop: Prop) => {
//   return new prop().getFullYear();
// };

// console.log(getData(Date)); // 2024

// -----------------------------

// Function Overload

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

// // function body
// function add(a: unknown, b: unknown): unknown {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   }
// }

// console.log(add(5, 10)); // 15
// console.log(add("Hello, ", "World!")); // Hello, World!

// -----------

// function add(a: string): void;
// function add(a: number): void;

// // // function body
// function add(a: string | number): void {
//   console.log(a);
// }

// let num: number = 10;

// console.log(add(num > 1 ? 1 : "1"));
