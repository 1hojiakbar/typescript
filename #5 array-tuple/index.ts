// Array in TS

// let arr: [] = [];
// #description: that's a simple empty array

// let ar: number[] = [1, 2, 3, 4, 5];
// let ar: Array<number> = [12,3,4];
// #description: this array only accepts the number value

// ===========================

// let arrStr: string[] = ["abc", "cba"];
// let arr: Array<string> = ["abc", "cba"];
// #description: this array only accepts the string value

// ===========================

// union with array
// let arr: (number | string)[] = [1, 2, 3, "abc", "cba"];
// let ar: Array<string | number> = [123, "abc"];
// #description: this array only accepts the string and number value

// ===========================

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// type Data = User[];

// let data: Data = [
//   { id: 1, name: "user name", age: 24 },
//   { id: 2, name: "user name", age: 24 },
//   { id: 3, name: "user name", age: 24 },
//   { id: 4, name: "user name", age: 24 },
//   { id: 5, name: "user name", age: 24 },
// ];

// console.log(data[0].id); // 1

// ======================================================================

// Tuple

// First sytax for the tuple
// const ar: [number, string] = [123, "abc"]; // correct case
// const ar: [number, string] = ["abc", 123]; // incorrect case

// ----------------

// All array methods work for "tuple" ! ! !

// Example
// const arr: [number, boolean] = [123, true];
// arr.push(123);

// ----------------

// const arr: [number, boolean] = [123, true];

// arr[0] = "123"; // error
// arr[0] = 12; // success
// console.log(arr);

// ----------------

// const arr: [number, boolean] = [123, true];

// arr[5] = "123"; // error because 5th yet index is undefined
// console.log(arr); // [12, true]

// ----------------

// non-binding

// Example
// const arr: [number?, string?, boolean?] = [];

// arr.push(12, 45);
// console.log(arr);
