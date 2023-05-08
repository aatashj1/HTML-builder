const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'text.txt');

// Create a readline interface for getting user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Check if the file already exists, and create it if it doesn't
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '');
}

// Prompt the user to enter text
rl.setPrompt('put some txt HERE: ');

// Display the prompt
rl.prompt();

// Listen for user input
rl.on('line', (input) => {
  // If the user enters 'exit', close the readline interface and exit the program
  if (input === 'exit') {
    rl.close();
    console.log('okEEy bye!!');
    process.exit();
  }

  // Otherwise, append the input to the file
  fs.appendFile(filePath, input + '\n', (err) => {
    if (err) throw err;
  });

  // Display the prompt again
  rl.prompt();
});

// Listen for SIGINT (ctrl+c) and close the readline interface
rl.on('SIGINT', () => {
  rl.close();
  console.log('okEEy bye!');
  process.exit();
});