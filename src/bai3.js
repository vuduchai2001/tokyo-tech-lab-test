const diablo = (m, d, k, c) => {
  if (d <= k && m > 1) return -1;

  let count = 0;
  let tg = d;
  while (m > 0) {
    if (tg - k <= 0 && m > 1) {
      count++;
      tg = d;
    }
    m -= 1;
    tg -= k;
  }
  return count * c;
};

module.exports = diablo;
