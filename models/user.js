const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
  },
  passwordHash: {
    type: String,
    trim: true,
  },
  isVerified: {
    type: String,
    trim: true,
  },
  passwordResetCode: {
    type: String,
  },
  verificationString: {
    type: String,
  },
  role: {
    type: String,
  },

  //
  profilepicture: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phonenumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  dateofbiirth: {
    type: Date,
  },
  Gender: {
    type: String,
  },
  artisttype: {
    type: String,
  },
  skilllevel: {
    type: String,
  },
  Genre: {
    type: String,
  },
  yearsofexpereince: {
    type: Number,
  },
  socialmedialink: {
    type: String,
  },
  bio: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
