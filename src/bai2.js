const gt = (a) => {
  let S = 1;
  for (let i = 1; i <= a; i++) {
    S *= i;
  }
  return S;
};

const combination = (n, k) => {
  return gt(n) / (gt(n - k) * gt(k));
};

const score = (a, b) => {
  return combination(a + b, a);
};

module.exports = score;
