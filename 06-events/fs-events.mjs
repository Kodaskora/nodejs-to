import EventEmitter from 'events';
import fs from 'fs';

const fileEmiter = new EventEmitter();

fileEmiter.on('writeComplete', () => {
  console.log('File was writen.');
  fs.appendFile('./first.txt', '\nOne more line', () => {
    console.log('Updated was writen.');
    fileEmiter.emit('renamedFile');
  });
});

fileEmiter.on('renamedFile', () => {
  fs.rename('./first.txt', './renamed-first.txt', () => {
    console.log('Renamed file');
  });
});

fs.writeFile('./first.txt', 'First file text', (err) => {
  if (err) console.log(err);
  else {
    fileEmiter.emit('writeComplete');
  }
});
