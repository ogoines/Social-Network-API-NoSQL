const { Schema, model, Types } = require('mongoose');

// thoughtSchema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Please enter your thoughts",
      minlength: 1,
      maxlength: 280
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },

    username: {
      type: String,
      required: 'Username required',
    },
    // array of nested reactions
    // gets reactionSchema 
    reactions: [reactionSchema],
  }
) 

// Retrieves the length of thoughts reaction array
thoughtSchema.virtual('reactionCount')
// Getter
.get(function () {
  return this.reactions.length;
});

// defines thought model
const Thought = model('Thought', thoughtSchema);
 
// reaction schema
const reactionSchema = new Schema(
  {
    //reaction id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: 'Reaction required',
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    username: {
      type: String,
      required: 'Username required',
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    //getters
    toJSON: {
      getters: true,
    }, 
  }
);


module.exports = Thought;