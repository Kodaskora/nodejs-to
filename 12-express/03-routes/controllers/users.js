//users
const getUsersHandler = (req, res) => {
  res.send('Get users route.');
};

const postUsersHandler = (req, res) => {
  res.send('Post users route.');
};

const getSingleUserHandler = (req, res) => {
  //console.log(req.params);
  res.send(`Get user route. UserId is ${req.params.userId}`);
};

module.exports = {
  getUsersHandler,
  postUsersHandler,
  getSingleUserHandler,
};
