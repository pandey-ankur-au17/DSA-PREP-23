function convertToRoman(n) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (let key in map) {
    result += key.repeat(Math.floor(n / map[key]));
    n %= map[key];
  }
  return result;
}

n = 53
console.log(convertToRoman(n));