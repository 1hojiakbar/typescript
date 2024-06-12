// #8 Basic object

// interface Type {
//   id: number;
//   readonly name: string;
//   status: string;
//   student: boolean | string[];
//   year?: number;
// }

// let obj: Type = {
//   id: 1,
//   name: "Eshmat",
//   status: "developer",
//   student: true,
//   // year is optional property
// };

// let obj2: Type = {
//   id: 1,
//   name: "Eshmat",
//   status: "developer",
//   student: ["hello world"],
//   year: 2024,
// };

// delete obj.name // error: The operand of a 'delete' operator cannot be a read-only property

// ----------------

// read only into writable

// let obj1: { readonly name: string } = { name: "eshmat" };
// let obj2: { name: string } = obj1;

// obj2.name = "toshmat";

// console.log(obj1.name); // toshmat
// console.log(obj2.name); // toshmat

// ----------------

// object with function / distructure

// type Type = { name: string };

// const getData2 = ({ name }: Type): void => {
//   console.log(name, "World");
// };

// getData2({ name: "Hello" }); // Hello World
