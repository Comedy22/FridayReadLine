//gather everything in 1 file , 1 by 1 linear execution
const fileManager = require('./fileManager');
const userInterface = require('./userInterface');
const gameManager = require('./gameManager');

fileManager.listFiles((themes) => {
  userInterface.showFiles(themes);
  userInterface.askQuestion('Выберите тему: ', (answer) => {
    const selectedTheme = themes[answer - 1];
    const selectedFile = `${selectedTheme}.txt`;
    fileManager.readFile(selectedFile, (lines) => {
      gameManager.startGame(lines, userInterface.askQuestion);
    });
  });
});
