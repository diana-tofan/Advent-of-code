const  fs = require('fs');

const isIncreasingSequence = digits => {
  return digits.every((d, i) => i === 0 || d >= digits[i-1])
};

const isAdjacentDigits = digits => {
  return digits.some((d, i, a) => d === a[i-1] && d !== a[i-2] && d !== a[i+1]);
};

// 123444
const checkIfValid = n => {
  const digits = ('' + n).split('');
  if ([...new Set(digits)].length !== digits.length) {
    return isAdjacentDigits(digits) && // check for 2 adjacent repeating digits
    isIncreasingSequence(digits); // check for increasing digits
  }
  return false;
}

const getPossiblePasswords = file => {
  const input = readFile(file);
  const min = input.split('-')[0];
  const max = input.split('-')[1];
  let count = 0;
  for (let i = min; i <= max; i++) {
    if (checkIfValid(i)) {
      count++;
    }
  }
  return count;
};

const readFile = file => {
  return fs.readFileSync(file).toString();
};

console.log(getPossiblePasswords("day4.txt"));