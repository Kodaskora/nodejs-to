import { Transform } from 'stream';
import fs from 'fs';

const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const uppearCase = chunk.toString().toUpperCase();
    cb(null, uppearCase);
  },
});

const reverseCaseStream = new Transform({
  transform(chunk, encoding, cb) {
    const arrayOfChars = chunk.toString().split('');
    const lastChar = arrayOfChars.pop();
    const reverseCase = arrayOfChars.reverse().concat(lastChar).join('');

    cb(null, reverseCase);
  },
});

process.stdin
  .pipe(upperCaseStream)
  .pipe(reverseCaseStream)
  .pipe(process.stdout);

// //Pipe to file
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// //Pipe to stdout
// process.stdin.pipe(process.stdout);
