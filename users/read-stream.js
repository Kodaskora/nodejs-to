import fileReader from 'fs';
import stream from 'stream';

const readStream = fileReader.createReadStream('./f.txt', 'utf-8');

const writeStream = fileReader.createWriteStream('./f_copy.txt');

readStream.on('data', (dataChunk) => {
  console.log(dataChunk);
});

readStream.on('end', () => {
  console.log('File reading complete');
});

readStream.on('error', (err) => {
  console.log(err);
});

readStream.pipe(writeStream);

writeStream.on('close', () => {
  console.log('File copy completed');
});

const upperCaseStream = new stream.Transform({
  transform(chunk, encoding, callback) {
    const upperCased = chunk.toString().toUpperCase();
    callback(null, console.log(upperCased));
  },
});

readStream.pipe(upperCaseStream);
