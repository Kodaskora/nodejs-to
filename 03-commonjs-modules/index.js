// const exportedObject = require('./multiple-exports');

const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');

const {
  myFriendsName,
  myName: myOtherName,
  myGreatHobbies,
} = require('./export-and-import');

const greetingFn = require('./single-export');

// const greetingFn = require('c:/Users/tomas/OneDrive/Desktop/Projects/node/03-commonjs-modules/single-export.js');

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);
console.log(myOtherName);
console.log(myFriendsName);

myHobbies.push('drinking');

console.log(myHobbies);
console.log(myGreatHobbies);

// greeting(myName);
greetingFn(myName);

// console.log(exportedObject);
// console.log(__filename);
// console.log(__dirname);
// console.log(module);
// console.log(exports);
// console.log(require);
