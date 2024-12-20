//comments
const getCommentsHandler = (req, res) => {
  res.send('Get comments route.');
};

const postCommentsHandler = (req, res) => {
  res.send('Post comments route.');
};

const getSingleCommentHandler = (req, res) => {
  //console.log(req.params);
  res.send(`Get comment route. CommentId is ${req.params.commentId}`);
};

const deleteCommentHandler = (req, res) => {
  res.send(`Delete comment route. CommentId is ${req.params.commentId}`);
};

module.exports = {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteCommentHandler,
};
