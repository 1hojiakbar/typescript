"use strict";
// // Class
class A {
    constructor(name) {
        this.name = "abc";
        this.age = 123;
        this.name = name;
    }
    update() {
        this.age = 321;
    }
}
class B extends A {
    constructor() {
        super(...arguments);
        this.title = "eshmat";
    }
}
const first = new B("abcd");
first.update();
console.log(first.age);
