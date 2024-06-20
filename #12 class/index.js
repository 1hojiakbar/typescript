"use strict";
// Class
class Test {
    constructor() {
        this.title = "abc";
    }
}
class Webbrain {
    constructor(a, b) { }
    update() {
        console.log("update function called");
    }
}
let wba = new Webbrain();
let wba1 = new Webbrain("webbrain");
let wba2 = new Webbrain(1, 1);
