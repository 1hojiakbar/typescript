"use strict";
// // Class
class A {
    constructor(props) {
        console.log(props);
    }
}
class B extends A {
    constructor(props) {
        super(props);
        // agar biz joriy class"ni boshqa class-dan inherit qilib uning constructor"ni overwrite qilimoqchi bo'lsak biz har doim 
        // super yozib ketishimiz kerak aks holda bizga error beradi va undan keyingi "this" bilan bog'liq hamma kodlar super-dan kegin yoziladi
    }
}
let test = new B(123);
