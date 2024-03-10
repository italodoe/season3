let obj = {
  a: 12,
  b: true,
  c: "test-label",
};

let obj2 = {
  "nombre y apellido": "Jon Doe",
  "edad y peso": {
    edad: 44,
    peso: 88,
  },
};

const campo1 = "nombre y apellido";
const campo2 = "edad y peso";
console.log(obj2[campo1] , obj2[campo2]["edad"]);
console.log(obj2);
console.log("");