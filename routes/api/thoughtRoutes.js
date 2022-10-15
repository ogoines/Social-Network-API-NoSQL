const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
 // createReaction,
 // removeReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  //.post(createReaction)
  .delete(removeThought);

router
  .route('/:userId/:thoughtId/:reactionId')
 // .delete(removeReaction);

module.exports = router;
