//full in 1 file without classes/promisised functions
const fs = require('fs');
const readline = require('readline');

fs.readdir('./files', (err, files) => {
    if (err) throw err;
    files.forEach((file, index) => {
        console.log(`${index + 1}: ${file}`);
    });

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Выберите номер файла: ', (answer) => {
        const selectedFile = files[answer - 1];
        fs.readFile(`./files/${selectedFile}`, 'utf-8', (err, data) => {
            if (err) throw err;
            const lines = data.split('\n');
            startGame(lines);
        });
        rl.close();
    });
});
function startGame(lines) {
    let index = 0;

    const askQuestion = () => {
        if (index >= lines.length) {
            console.log('Вы ответили на все вопросы!');
            return;
        }

        const question = lines[index];
        console.log(`Вопрос: ${question}`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question('Ваш ответ: ', (userAnswer) => {
            const correctAnswer = lines[index + 1];
            if (userAnswer.trim() === correctAnswer.trim()) {
                console.log('Правильно!');
            } else {
                console.log(`Неправильно! Верный ответ: ${correctAnswer}`);
            }

            index += 3;
            rl.close();
            askQuestion();
        });
    };

    askQuestion();
}
