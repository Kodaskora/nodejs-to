let isRuning = true;

setTimeout(() => (isRuning = false), 10);
process.nextTick(() => console.log('Next tick'));

while (isRuning) {
  console.log('While loop is running...');
}
