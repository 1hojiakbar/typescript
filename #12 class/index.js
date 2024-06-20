"use strict";
// Class
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Webbrain_name;
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
    constructor() {
        _Webbrain_name.set(this, "webbrain");
    }
    get getName() {
        return __classPrivateFieldGet(this, _Webbrain_name, "f");
    }
    set getName(name) {
        if (typeof name === "number")
            __classPrivateFieldSet(this, _Webbrain_name, "no change", "f");
        else
            __classPrivateFieldSet(this, _Webbrain_name, name, "f");
    }
}
_Webbrain_name = new WeakMap();
let wba = new Webbrain();
wba.getName = 133;
console.log(wba.getName);
