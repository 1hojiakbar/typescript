// type | interface

let language: "uzbek" | "english" | "rus" = "uzbek";

const data: { id?: number; value: "uzbek" | "english" | "rus" }[] = [
  { value: "uzbek" },
  { id: 2, value: "english" },
  { id: 3, value: "rus" },
];

data.map((lang) => {
  language = lang.value;
});
