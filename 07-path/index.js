const path = require('path');

const filePath = '/Users/tomas/Desktop/node/index.js';
const filePath3 = path.join(
  'C:',
  'Users',
  'tomas',
  'OneDrive',
  'Desktop',
  'Projects',
  'node',
  'index.js'
);
const filePath2 = '/Users/tomas/Desktop/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './movies/subfolder';

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(filePath3));
console.log(path.isAbsolute(relativePath));
console.log(filePath3);

console.log(path.basename(filePath));
console.log(path.basename(directoryPath));
console.log(path.dirname(filePath));
console.log(path.dirname(directoryPath));
console.log(path.resolve(relativePath));

console.log(path.extname(filePath2));

console.log(path.parse(filePath3));
console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
