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

interface Person {
  readonly [key: string]: number | string | boolean;
  id: number;
}

let person: Person = {
  id: 1,
  name: "Toshmat",
  age: 25,
};

// person.name = 2; // error: Index signature in type 'Person' only permits reading
