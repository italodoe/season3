const obj = {
  a: 1,
  b: true,
  c: "test-label",
};

obj.a = 22;
obj.b = false;
obj.c = obj.a + obj.b;

console.log(obj);