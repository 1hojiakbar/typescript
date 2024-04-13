// Array in TS

// let arr: [] = [];
// that's a simple empty array

// let ar: number[] = [1, 2, 3, 4, 5];
// this array only accepts the number value

// let arrStr: string[] = ["abc", "cba"];
// this array only accepts the string value

// ===========================

// union with array
let arr: (number | string)[] = [1, 2, 3, "abc", "cba"];
// this array only accepts the string and number value
