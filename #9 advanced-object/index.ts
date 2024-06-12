// Index Signatures

// sytax of index signature [key: KeyType]: ValueType;

// interface Type {
//   [key: string]: number | string | boolean;
//   id: number;
// }

// let obj: Type = {
//   id: 1,
//   name: "Eshmat",
//   found: 2024,
//   status: true,
// };

// ----------------------------

// Readonly Signatures

// interface Person {
//   readonly [key: string]: number | string | boolean | [];
//   id: number;
//   title: []; // error: Property 'title' of type '[]' is not assignable to 'string' index type 'string | number | boolean'
// }

// let person: Person = {
//   id: 1,
//   name: "Toshmat",
//   age: 25,
//   title: [],
// };

// person.name = 2; // error: Index signature in type 'Person' only permits reading

// ----------------------------

// keyof

interface Type {
  id: number;
  name: string;
  age: number;
}

const obj: Type = {
  id: 1,
  name: "Eshmat",
  age: 25,
};

const getData = (value: keyof typeof obj): void => {
  console.log(obj[value]);
};

getData("name"); // Eshmat
