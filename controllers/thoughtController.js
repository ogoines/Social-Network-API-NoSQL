const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch(err => res.status(500).json(err));
  },
  
   //Gets a single thought 
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //Creates a new Thought then updates user who created thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought created, but found no user with that ID',
            })
            : res.json('Created the thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Updates a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a thought
  removeThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : User.deleteMany({ _id: { $in: thought.users } })
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  }, 
  // removeReaction(req, res) {
  //   Thought.findOneAndUpdate(
  //     { _id: req.params.thoughtId },
  //     { $pull: { reactions: { reactionId: req.params.reactionId } } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((user) =>
  //       !user
  //         ? res
  //           .status(404)
  //           .json({ message: 'No user found with that ID :(' })
  //         : res.json(user)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
  
  // createReaction(req, res) {
  //   Thought.findOneAndUpdate(
  //     { _id: req.params.thoughtId },
  //     { $push: { reactions: req.body } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((user) =>
  //       !user
  //         ? res
  //           .status(404)
  //           .json({ message: 'No user found with that ID :(' })
  //         : res.json(user)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },






};
