// Class

// class Test {
// title: string;
// agar siz tsconfig.json file ichidan "strictPropertyInitialization"ga false qiymat biriktirsangiz bu ogohlantirish yoqoladi
// age!: number; // ! - bizga o'zgaruvchiga qiymat kelishi yoki kelmasligi haqida malumot beradi
//   constructor() {
//     this.title = "abc";
//   }
// }

// class Webbrain {
//   constructor();
//   constructor(name: string);
//   constructor(name: number, age: number);
//   constructor(a?: any, b?: any) {}
//   update() {
//     console.log("update function called");
//   }
// }

// let wba = new Webbrain();
// let wba1 = new Webbrain("webbrain");
// let wba2 = new Webbrain(1, 1);

// -----------------------------------

class Webbrain {
  #name: string = "webbrain";
  get getName() {
    return this.#name;
  }
  set getName(name: number | string) {
    if (typeof name === "number") this.#name = "no change";
    else this.#name = name;
  }
}

let wba = new Webbrain();
wba.getName = 133;
console.log(wba.getName);
