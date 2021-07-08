// const { TestWatcher } = require('jest');
const {
  sum,
  capitilize,
  reverseString,
  myCalculator,
  caesarScramble,
  caesarUnscramble,
  analyzeArray,
} = require('./testing-practice');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitilize first letter of a string', () => {
  expect(capitilize('hello')).toBe('Hello');
});

test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('add method in Calculator', () => {
  expect(myCalculator.add(2, 4)).toBe(6);
});

test('subtract method in Calculator', () => {
  expect(myCalculator.subtract(2, 3)).toBe(-1);
});

test('multiply method in Calculator', () => {
  expect(myCalculator.multiply(2, 3)).toBe(6);
});

test('divide method in Calculator', () => {
  expect(myCalculator.divide(2, 4)).toBe(0.5);
});

test('scramble with Caesar', () => {
  expect(caesarScramble('My name is Matt!', 1)).toBe('Lx mzld hr Lzss!');
});

test('unscramble with Caesar', () => {
  expect(caesarUnscramble('Lx mzld hr Lzss!', 1)).toBe('My name is Matt!');
});

test('Return array average', () => {
  let analyzeObject = analyzeArray([2, 4]);

  expect(analyzeObject.average).toBe(3);
});

test('Return lowest number in an array', () => {
  let analyzeObject = analyzeArray([2, 4, 3, 5, 1]);

  expect(analyzeObject.min).toBe(1);
});

test('Return the largest number in an array', () => {
  let analyzeObject = analyzeArray([2, 4, 3, 5, 1]);

  expect(analyzeObject.max).toBe(5);
});

test('Return the length of an array', () => {
  let analyzeObject = analyzeArray([2, 4, 3, 5, 1]);

  expect(analyzeObject.length).toBe(5);
});
