const fs = require('fs/promises');

async function manageFile() {
  try {
    await fs.writeFile('./first.txt', 'First file text');
    console.log('File was written.');

    await fs.appendFile('./first.txt', '\nOne more line');
    console.log('Update was written.');

    await fs.rename('./first.txt', './renamed-first.txt');
    console.log('File was renamed.');
  } catch (err) {
    console.log(err);
  }
}

manageFile();
