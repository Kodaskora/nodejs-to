//console.log(module);
import { season, temp } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getData from './default-export.mjs';
import DEFAULT_SERVER_NAME, {
  USERNAME as MYUSER,
  PASSWORD,
} from './mixed-exports.mjs';

console.log(season);
console.log(temp);

console.log(isRaining);
console.log(humidity);

getData('https://jsonplaceholder.typicode.com/posts/1')
  .then((post) => console.log(post))
  .catch((error) => console.log(error));

console.log(DEFAULT_SERVER_NAME);
console.log(MYUSER, PASSWORD);
