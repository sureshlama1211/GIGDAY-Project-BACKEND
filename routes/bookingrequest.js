const connectDB = require("../db/connect");
const Booking = require("../models/Booking");

const bookingrequest = {
  path: "/api/booking",
  method: "post",
  handler: async (req, res) => {
    //calculate the expiry date

    //
    const db = connectDB(process.env.MONGO_URI);
    const bookingreq = await Booking.create(req.body);
    res.status(201).json({ bookingreq });
  },
};

const getBookings = {
  path: "/api/mybooking",
  method: "get",
  handler: async (req, res) => {
    const db = connectDB(process.env.MONGO_URI);

    if (req.query.role === "artist") {
      userBooking = await Booking.find({ bookedTo: req.params.userid });
    }

    if (req.query.role === "restaurant") {
      userBooking = await Booking.find({ bookedBy: req.params.userid });
    }
    if (!userBooking) {
      res.status(500).json({ error: "something went wrong" });
    }
    res.send(userBooking);
  },
};

module.exports = { bookingrequest, getBookings };
