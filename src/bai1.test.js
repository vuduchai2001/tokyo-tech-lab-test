const balancedBracket = require("./bai1");

test("test case 1", () => {
  expect(balancedBracket("()")).toBe("YES");
});

test("test case 2", () => {
  expect(balancedBracket("{[()]}")).toBe("YES");
});

test("test case 3", () => {
  expect(balancedBracket("{[()}]")).toBe("YES");
});

test("test case 4", () => {
  expect(balancedBracket("()(")).toBe("YES");
});

test("test case 5", () => {
  expect(balancedBracket("]()[")).toBe("YES");
});
