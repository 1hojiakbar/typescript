// // Class

// class Test {
//   title: string;
//   // agar siz tsconfig.json file ichidan "strictPropertyInitialization"ga false qiymat biriktirsangiz bu ogohlantirish yoqoladi
//   age!: number; // ! - bizga o'zgaruvchiga qiymat kelishi yoki kelmasligi haqida malumot beradi
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

// class Webbrain {
//   #name: string = "webbrain";
//   get getName() {
//     return this.#name;
//   }
//   set getName(name: number | string) {
//     if (typeof name === "number") this.#name = "no change";
//     else this.#name = name;
//   }
// }

// let wba = new Webbrain();
// wba.getName = 133;
// console.log(wba.getName);

// -----------------------------------

// class with type & interface

// type AType = {
//   name: string;
//   age: number;
// };

// class A implements AType {
//   name = "abc";
//   age = 123;
//   constructor(name: string) {
//     this.name = name;
//   }

//   update() {
//     this.age = 321;
//   }
// }

// interface BType {
//   title: string;
// }

// class B extends A implements BType {
//   title = "eshmat";
// }

// const first = new B("abcd");

// first.update();
// console.log(first.age);

// -----------------------------------

// type AType = {
//   name?: string;
//   age?: number;
// };

// interface BType {
//   title?: string;
// }

// class A implements AType {
//   constructor(props: number) {
//     console.log(props);
//   }
// }

// class B extends A implements BType {
//   constructor(props: number) {
//     super(props);
//     // agar biz joriy class"ni boshqa class-dan inherit qilib uning constructor"ni overwrite qilimoqchi bo'lsak biz har doim
//     // super yozib ketishimiz kerak aks holda bizga error beradi va undan keyingi "this" bilan bog'liq hamma kodlar super-dan kegin yoziladi
//   }
// }

// let test = new B(123);

// -----------------------------------

// Abstract

// abstract class GetCar {
//   abstract name: string;
//   abstract update(a: string): string;
// }

// class Car extends GetCar {
//   name = "eshmat";
//   update(a: string): string {
//     return a;
//   }
// }

// -----------------------------------

// // Static classes
// class Get {
//   static update() {
//     console.log("static update");
//   }
//   update() {
//     console.log("general update");
//   }
// }
// // reserved keyword "name"
// const get = new Get();
// Get.update(); // static update
// get.update(); // general update
