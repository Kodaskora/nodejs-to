import fs from 'fs/promises';

try {
  const data = await fs.readFile('file.txt', 'utf-8');
  console.log(data);
  const folder = new URL('./test/', import.meta.url);
  const createDir = await fs.mkdir(folder);
  console.log(`created ${createDir}`);
} catch (error) {
  console.log(error);
}
