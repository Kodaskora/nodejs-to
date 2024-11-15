const express = require('express');
const {
  getSingleUserHandler,
  getUsersHandler,
  postUsersHandler,
} = require('../controllers/users');

const router = express.Router();

router.route('/').get(getUsersHandler).post(postUsersHandler);
router.get('/:userId', getSingleUserHandler);

module.exports = router;
