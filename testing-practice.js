function sum(a, b) {
  return a + b;
}

function capitilize(string) {
  let firstLetter = string.slice(0, 1).toUpperCase();

  return firstLetter + string.slice(1, string.length);
}

function reverseString(string) {
  let charArray = string.split('');
  let reverseArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverseArray.push(charArray[i]);
  }
  let result = reverseArray.join('');
  return result;
}

let myCalculator = {
  add(arg1, arg2) {
    return arg1 + arg2;
  },

  subtract(arg1, arg2) {
    return arg1 - arg2;
  },

  multiply(arg1, arg2) {
    return arg1 * arg2;
  },

  divide(arg1, arg2) {
    return Math.round(10 * (arg1 / arg2)) / 10;
  },
};

function caesarScramble(string, num) {
  if (num > 26) {
    num = num % 26;
  }

  let result = string.split('').map((x) => x.charCodeAt());
  let cipherArray = result
    .map((x) => {
      if (x < 65) {
        return String.fromCharCode(x);
      }

      if (x >= 65 && x <= 90) {
        if (x - num < 65) {
          x = x + 26;
        } else if (x - num > 90) {
          x = x - 26;
        }
        return String.fromCharCode(x - num);
      }

      if (x - num < 97) {
        x = x + 26;
      } else if (x - num > 122) {
        x = x - 26;
      }
      return String.fromCharCode(x - num);
    })
    .join('');

  return cipherArray;
}

function caesarUnscramble(string, num) {
  return caesarScramble(string, 26 - num);
}

let analyzeObject = analyzeArray([2, 4, 1, 3, 5]);

function analyzeArray(array) {
  let obj = {
    average: array.reduce((a, b) => a + b) / array.length,
    min: array.sort((a, b) => a - b)[0],
    max: array.sort((a, b) => b - a)[0],
    length: array.length,
  };
  return obj;
}

console.log(analyzeObject);

module.exports = {
  sum,
  capitilize,
  reverseString,
  myCalculator,
  caesarScramble,
  caesarUnscramble,
  analyzeArray,
};
