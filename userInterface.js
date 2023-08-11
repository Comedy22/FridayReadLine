//user-interface part for group project
const readline = require('readline');

const askQuestion = (question, callback) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(question, (answer) => {
    rl.close();
    callback(answer);
  });
};

const showFiles = (files) => {
  files.forEach((file, index) => {
    console.log(`${index + 1}: ${file}`);
  });
};

module.exports = {
  askQuestion,
  showFiles,
};
