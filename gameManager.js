//game logic
const startGame = (lines, askQuestion) => {
    let index = 0;
  
    const iterateQuestions = () => {
      if (index >= lines.length) {
        console.log('Вы ответили на все вопросы!');
        return;
      }
  
      const question = lines[index];
      askQuestion(`Вопрос: ${question}\nВаш ответ: `, (userAnswer) => {
        const correctAnswer = lines[index + 1];
        if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
          console.log('✌️');
        } else {
          console.log(`Неправильно! Верный ответ: ${correctAnswer}`);
        }
  
        index += 3;
        iterateQuestions();
      });
    };
  
    iterateQuestions();
  };
  
  module.exports = {
    startGame,
  };
  