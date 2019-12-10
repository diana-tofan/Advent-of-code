const  fs = require('fs');

const getValue = file => {
  const program = readFile(file);
  let newProgram = program;
  const noun = '12';
  const verb = '2';
  newProgram[1] = noun;
  newProgram[2] = verb;
  let i = 0;
  while (i < newProgram.length - 1) {
    const opcode = newProgram[i];
    const params = opcode !== '99' && [newProgram[parseInt(newProgram[i+1])], newProgram[parseInt(newProgram[i+2])], newProgram[parseInt(newProgram[i+3])]];
    let output;
    if (opcode === '1') {
      output = parseInt(params[0]) + parseInt(params[1]);
      newProgram[parseInt(newProgram[i+3])] = output;
    }
    if (opcode === '2') {
      output = parseInt(params[0]) * parseInt(params[1]);
      newProgram[parseInt(newProgram[i+3])] = output;
    }
    if (opcode === '99') {
      return newProgram[0];
    }
    i += 4;
  }
  return newProgram[0];
}

const readFile = file => {
  return fs.readFileSync(file).toString().split(',');
}

console.log(getValue("day2.txt"));