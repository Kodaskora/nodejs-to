const fs = require('fs');

fs.writeFile('./first.txt', 'First file text', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File was writen.');
    fs.appendFile('./first.txt', '\nOne more line', (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated was writen.');
        fs.rename('./first.txt', './renamed-first.txt', (err) => {
          if (err) console.log(err);
          else console.log('Renamed file');
        });
      }
    });
  }
});
