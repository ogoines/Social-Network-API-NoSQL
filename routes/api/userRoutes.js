const router = require('express').Router();

// user routes
const {
  getAllUsers,
  getUserById,
  createUser,
  //updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:userId
router.route('/:userId')
  .get(getUserById)
  //.put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends/:friendId')
  .post(addFriend);

// /api/users/:userId/friends/:friendsId
router.route('/:userId/friends/:friendId')
  .delete(deleteFriend);

module.exports = router;
