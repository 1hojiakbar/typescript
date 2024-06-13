// Function in the TS

// parametr / argument
type Rest = {
  sum: number;
  list: number[];
};

type Prop = {
  a: number;
  list: number[];
  b?: number;
};

const getData = (prop: Prop, ...rest: string[]): Rest => {
  console.log(rest);
  return {
    sum: 1,
    list: [1, 2, 3, 4],
  };
};

console.log(getData({ a: 12, list: [1, 2, 3] }, "a", "b"));
