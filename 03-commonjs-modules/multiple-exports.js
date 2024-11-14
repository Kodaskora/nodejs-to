const myName = 'Zuikis';
const myHobbies = ['swimming', 'boxing', 'cycling'];
const myFavoriteNumber = 44;

console.log('Text from the multiple-exports CommonJS module');

// module.exports.myName = myName;
// module.exports.myHobbies = myHobbies;
// module.exports.myFavoriteNumber = myFavoriteNumber;

exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
