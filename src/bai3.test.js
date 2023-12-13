const diablo = require("./bai3");

test("test case 1", () => {
  expect(diablo(10, 5, 1, 2)).toBe(4);
});

test("test case 2", () => {
  expect(diablo(10, 4, 1, 2)).toBe(4);
});
