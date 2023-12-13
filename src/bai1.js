const balanceBracket = (s) => {
  let arr = [];
  for (const char of s) {
    const charCode = char.charCodeAt(0);
    if (charCode === 40 || charCode === 91 || charCode === 123) {
      arr.push(char);
    } else {
      const lastArr = arr.pop();
      if (
        lastArr === undefined ||
        Math.abs(lastArr.charCodeAt(0) - charCode) > 2
      ) {
        return "NO";
      }
    }
  }
  return arr.length === 0 ? "YES" : "NO";
};

module.exports = balanceBracket;
