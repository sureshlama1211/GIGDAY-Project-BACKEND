const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  genre: {
    type: String,
  },
  venueaddress: {
    type: String,
  },
  paymenttype: {
    type: String,
  },
  Budget: {
    type: Number,
  },
  contactnumber: {
    type: Number,
  },
  date: {
    type: Date,
  },
});
