// Array in TS

// let arr: [] = [];
// that's a simple empty array

// let ar: number[] = [1, 2, 3, 4, 5];
// this array only accepts the number value

// let arrStr: string[] = ["abc", "cba"];
// this array only accepts the string value

// ===========================

// union with array
// let arr: (number | string)[] = [1, 2, 3, "abc", "cba"];
// this array only accepts the string and number value

// let ar: (number | string)[] = [1, 2, 3, 4, 5, 6, "abc", "werd"];

// ===========================

interface User {
  id: number;
  name: string;
  age: number;
}

type Data = User[];

let data: Data = [
  { id: 1, name: "user name", age: 24 },
  { id: 2, name: "user name", age: 24 },
  { id: 3, name: "user name", age: 24 },
  { id: 4, name: "user name", age: 24 },
  { id: 5, name: "user name", age: 24 },
];

console.log(data[0].id); // 1
