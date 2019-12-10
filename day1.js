const  fs = require('fs');

const getFuel = mass => {
  const calculateMass = mass => Math.floor(mass / 3) - 2;
  const newMass = calculateMass(mass);
  return calculateMass(newMass) > 0 ? newMass + getFuel(newMass) : newMass;
};

// Sum of fuel requirements
const getSum = file => {
  const moduleMass = readFile(file);
  return moduleMass.reduce((acc, mass) => acc + getFuel(mass), 0);
};

const readFile = file => {
  return fs.readFileSync(file).toString().split("\n");
}

console.log(getSum("day1.txt"))

console.log(getFuel(100756))