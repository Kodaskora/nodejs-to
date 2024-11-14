const fs = require('fs/promises');

fs.writeFile('./first.txt', 'First file text')
  .then(() => console.log('File was writen.'))
  .then(() => fs.appendFile('./first.txt', '\nOne more line'))
  .then(() => console.log('Updated was writen.'))
  .then(() => fs.rename('./first.txt', './renamed-first.txt'))
  .then(() => console.log('Renamed file'))
  .catch((err) => console.log(err));
