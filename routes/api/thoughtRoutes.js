const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction
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
  .delete(removeThought);

 // /api/applications/:applicationId/tags
router.route('/:thoughtId/reactions')
  .post(createReaction);

// /api/applications/:applicationId/tags/:tagId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
