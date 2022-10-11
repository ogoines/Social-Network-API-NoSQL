const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },

    // Id values referencing the Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      },
    ],

    // Id values referencing the User model
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);
// Retrieves the length of user's friends
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initializes User model
const User = model('user', userSchema);

module.exports = User;
