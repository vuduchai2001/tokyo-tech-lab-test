const score = require("./bai2");

test("test case 1", () => {
  expect(score(2, 0)).toBe(1);
});

test("test case 2", () => {
  expect(score(1, 3)).toBe(4);
});
