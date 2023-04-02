const mongoose = require("mongoose");

const GigSchema = new mongoose.Schema({
  gigProfile: {
    type: String,
  },

  gigName: {
    type: String,
    // required:[true,'must provide title'],
    trim: true,
    // maxlength:[20,'Max title should be of 20 characters'],
  },
  genreNeeded: {
    type: String,
    // required:[true,'must provide the venue address'],
    trim: true,
    // maxlength: [20, "max address length should be of 30 characters"],
  },
  gigdate: {
    type: Date,
    // reuired:[true,'must provide the venue name'],
    trim: true,
    // maxlength: [20, "max venue name should be of 20 characters long"],
    get: function (value) {
      return value
        ? new Date(value).toISOString().replace(/T/, " ").replace(/\..+/, "")
        : "";
    },
    set: function (value) {
      return value ? new Date(value).toISOString() : "";
    },
  },
  paymenttype: {
    type: String,
    // required:[true,'must provide the date']
  },
  starttime: {
    type: String,
    // required:[true,'must provide the genre'],
    trim: true,
  },
  endtime: {
    type: String,
    // reuired:[true,'must provide the capacity number '],
  },
  address: {
    type: String,
    // reuired:[true,'must provide the preferred skill']
  },
  payment: {
    type: Number,
  },
  isapplied: {
    type: false,
  },
  description: {
    type: String,
  },
});
module.exports = mongoose.model("Creategig", GigSchema);
