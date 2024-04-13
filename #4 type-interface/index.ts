// type | interface

// type keyword
// type Lang = "uzbek" | "english" | "rus";
// type DataType = { id?: number; value: Lang }[];

// #discription: Biz TypeScript-dagi "type" kalit so'z orqali ma'lumotlar shaklini aniqlash uchun foydalanishimiz mumkin.

// let language: Lang = "rus";

// const data: DataType = [
//   { value: "uzbek" },
//   { id: 2, value: "english" },
//   { id: 3, value: "rus" },
// ];

// data.map((lang) => {
//   language = lang.value;
// });

// =========================

// type"ga function biriktirish
// type Func = (title?: string, age?: number) => void;

// =========================

// interface Data {
//   id?: number;
//   value: string;
// }

// #discription: TypeScript-da interfeys ob'ekt rioya qilishi kerak bo'lgan shartnomani belgilaydi.

// =========================

// Example:
// type Lang = "uzbek" | "english" | "rus";

// interface Obj {
//   id?: number;
//   value: Lang;
// }

// type DataType = Obj[];

// const data: DataType = [
//   { value: "uzbek" },
//   { id: 2, value: "english" },
//   { id: 3, value: "rus" },
// ];

// interface"lar bizga array ichidagi object"larni soddalashtirib yozish uchun qo'l keladi.

// =========================

// interface vs type

// type Obj = {
//   age: number;
// };

// type Obj = {}; // error: Duplicate identifier 'Obj'

// biz agar type kalit so'zi bilan ikkta bir xil malumot turi yaratsak bizga error kelib chiqadi

// ============

// interface vs type

// interface Data {
//   name: string;
// }

// interface Data {
//   name: string;
// }

// bu holatda bizga error bermaydi lekin bu biz bir xil nomga ega malumot yaratib ketishimiz mumkin degani emas chunki
// biz agar ikkta bir xil nomga ega malumot"ni "interface" bilan elon qilib ketsak bizga "overwrite" holati yuzaga keladi.
// shuning uchun biz bunday holatda interface o'rniga type ishlatishimiz maqsadga muvofiq bo'ladi.

// =========================

// type Base = {
//   id: number;
//   key: string;
// };

// type ListBase = Base & {
//   found: number;
//   title: string;
// };

// type TupleBase = Base & {
//   age: number;
//   title: string;
// };

// const data: Base = {
//   id: 1,
//   key: "web",
// };

// const list: ListBase = {
//   id: 2,
//   key: "web",
//   found: 1234,
//   title: "webbrain",
// };

// const tuple: TupleBase = {
//   id: 1,
//   key: "web",
//   age: 12,
//   title: "webbrain",
// };

// #discription: biz "&" operatori orqali type bilan elon qilingan malumotlarini boshqa type"larga ham inherit qilishimiz
// mumkin.

// =========================

// "extends" in interface

// interface Base {
//   id: number;
//   key: string;
// }

// interface ListBase extends Base {
//   found: number;
//   title: string;
// }

// interface TupleBase extends Base {
//   age: number;
//   title: string;
// }

// const data: Base = {
//   id: 1,
//   key: "web",
// };

// const list: ListBase = {
//   id: 2,
//   key: "web",
//   found: 1234,
//   title: "webbrain",
// };

// const tuple: TupleBase = {
//   id: 1,
//   key: "web",
//   age: 12,
//   title: "webbrain",
// };

// #discription: biz interface uchun inherit qilmoqchi bo'lsak type uchun "&" operator ishlatgan bo'lsak interface uchun esa
// "extends" kalit so'zidan foydalanib malumotlarni bir-birga inherit qilishimiz mumkin.

// =========================

// #xulosa: Umuman olganda type va interface bizga yozayotkan malumotlarimizni soddalashtirishga va qayta-qayta
// yozishni oldini olishga yordam beradi.
