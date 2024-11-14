const { myName, myHobbies } = require('./multiple-exports');

const myFriendsName = 'Alice';

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
//property names can be different
module.exports.myGreatHobbies = myHobbies;
