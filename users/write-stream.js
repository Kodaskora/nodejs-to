import fs from 'fs';

const writeStream = fs.createWriteStream('./f.txt');

writeStream.write('This is data ');
writeStream.write('writen to the file using stream!');
writeStream.write('\n');
writeStream.write('Stream is great!');
writeStream.end(() => console.log('Finished'));
