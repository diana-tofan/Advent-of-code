const  fs = require('fs');

const getManhattanDistance = file => {
  const wires = readFile(file);
  console.log(wires);
}

const readFile = file => {
  return fs.readFileSync(file).toString().split(',');
}

console.log(readFile("day3.txt"));