// Index Signatures

// sytax of index signature [key: KeyType]: ValueType;

interface StringMap {
  [key: string]: number | string | boolean;
}

let obj: StringMap = {
  id: 1,
  name: "Hello",
  found: 2024,
  status: true,
};

console.log(obj);