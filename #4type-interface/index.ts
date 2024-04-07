// type | interface

type Lang = "uzbek" | "english" | "rus";

let language: Lang = "rus";

const data: { id?: number; value: Lang }[] = [
  { value: "uzbek" },
  { id: 2, value: "english" },
  { id: 3, value: "rus" },
];

data.map((lang) => {
  language = lang.value;
});
