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

interface Data {
  id?: number;
  value: string;
}

// #discription: TypeScript-da interfeys ob'ekt rioya qilishi kerak bo'lgan shartnomani belgilaydi.

// =========================

// Example:
type Lang = "uzbek" | "english" | "rus";

interface Obj {
  id?: number;
  value: Lang;
}

type DataType = Obj[];

const data: DataType = [
  { value: "uzbek" },
  { id: 2, value: "english" },
  { id: 3, value: "rus" },
];

// interface"lar bizga array ichidagi object"larni soddalashtirib yozish uchun qo'l keladi.
