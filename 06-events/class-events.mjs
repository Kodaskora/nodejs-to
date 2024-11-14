import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on('likePost', (username) => {
      console.log(`${username} liked your post!`);
    });
    this.on('error', (error) => {
      console.error(error);
    });
  }

  like(username) {
    if (!username) {
      return this.emit('error', new Error('No username in the like request!'));
    }
    this.likesQty += 1;
    this.emit('likePost', username);
  }
}

const postOne = new Post('Zuikis', 'Noriu esti!');

// console.log(postOne.author);
// console.log(postOne.text);
// console.log(postOne.likesQty);
postOne.like('Vilkas');
// console.log(postOne.likesQty);
setTimeout(() => postOne.like('Zebras'), 2000);
setTimeout(() => postOne.like('Stirna'), 4000);
setTimeout(() => postOne.like(), 4500);
setTimeout(() => console.log(postOne), 5000);
