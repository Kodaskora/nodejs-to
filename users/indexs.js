const usersArray = require('./users.js');
const { URL, USERNAME, PASSWORD } = require('../constants/constants.js');
const getDataM = require('../utils/utils.js');

getDataM('https://jsonplaceholder.typicode.com/posts')
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));

console.log(usersArray[0]);
console.log(URL);
console.log(USERNAME);
console.log(PASSWORD);
