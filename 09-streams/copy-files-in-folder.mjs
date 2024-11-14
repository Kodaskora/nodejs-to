import fs from 'fs';
import path from 'path';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
  console.warn(`Source dir ${sourceDir} doesn't exist!`);
  console.log('Exiting...');
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmSync(destinationDir, { recursive: true });
  console.log('Destination dir removed');
}

fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Start', performance.now());

  files.forEach((file, index) => {
    const sourceFilePath = path.join(sourceDir, file);
    const destinationFilePath = path.join(
      destinationDir,
      `${index + 1}. ${file}`
    );

    const streamReader = fs.createReadStream(sourceFilePath);
    const streamWriter = fs.createWriteStream(destinationFilePath);

    streamReader.pipe(streamWriter);

    streamWriter.on('finish', () => {
      console.log(`File ${file} was copied.`);
    });
  });
  console.log('End', performance.now());
});
