const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'text.txt');

fs.access(filePath, (err) => {
  if (err) {
    fs.writeFile(filePath, '', (err) => {
      if (err) throw err;
      startListening();
    });
  } else {
    startListening();
  }
});

function startListening() {
  stdout.write('your text: ');


  stdin.on('data', (input) => {
    input = input.toString().trim();

    if (input === 'exit') {
      stdout.write('bye!\n');
      stdin.end();
      process.exit();
    }

    fs.appendFile(filePath, input + '\n', (err) => {
      if (err) throw err;
    });

    stdout.write('your text: ');
  });
}