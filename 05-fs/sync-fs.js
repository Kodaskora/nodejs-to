const fs = require('fs');

//Avoid they block event loop.
try {
  fs.writeFileSync('./first.txt', 'First file text');
  console.log('File was writen.');
  fs.appendFileSync('./first.txt', '\nOne more line');
  console.log('Updated was writen.');
  fs.renameSync('./first.txt', './renamed-first.txt');
  console.log('Renamed file');
} catch (error) {
  console.log(error);
}
