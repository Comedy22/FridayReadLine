// work with file-system , reading directory + reading accepted file
const fs = require('fs');

const listFiles = (callback) => {
    fs.readdir('./files', (err, files) => {
        if (err) throw err;
        const fileNamesWithoutExtension = files.map((file) => file.replace('.txt', ''));
        callback(fileNamesWithoutExtension);
    });
};

const readFile = (fileName, callback) => {
    fs.readFile(`./files/${fileName}`, 'utf-8', (err, data) => {
        if (err) throw err;
        callback(data.split('\n'));
    });
};

module.exports = {
    listFiles,
    readFile,
};
