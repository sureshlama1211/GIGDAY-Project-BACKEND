const connectDB = require("../db/connect");
const Booking = require("../models/Booking");

const bookingrequest = {
  path: "/api/booking",
  method: "post",
  handler: async (req, res) => {
    //calculate the expiry date

    //
    const db = connectDB(process.env.MONGO_URI);
    console.log(req.body);
    const bookingreq = await Booking.create({
      bookedBy: req.body.bookedBy,
      bookedTo: req.body.bookedTo,
      gigname: req.body.gigname,
      gigtype: req.body.gigtype,
      date: req.body.date,
      showtype: req.body.showtype,
      startingtime: req.body.startingtime,
      endingtime: req.body.endingtime,
      Address: req.body.Address,
      budget: req.body.budget,
      status: req.body.status,
    });
    if (!bookingreq) {
      return res.status(400).json({ error: "something went wrong" });
    }
    console.log(bookingreq);
    res.status(201).json({ bookingreq });
  },
};

const getBookings = {
  path: "/api/mybooking/:userid",
  method: "get",
  handler: async (req, res) => {
    const db = connectDB(process.env.MONGO_URI);
    console.log(req.query);
    console.log(req.params);
    if (req.query.role === "artist") {
      userBooking = await Booking.find({ bookedTo: req.params.userid });
    }

    if (req.query.role === "restaurant") {
      userBooking = await Booking.find({
        bookedBy: req.params.userid,
      }).populate(bookedBy);
    }
    if (!userBooking) {
      res.status(500).json({ error: "something went wrong" });
    }
    console.log("k cha yr", userBooking);
    res.send(userBooking);
  },
};

module.exports = { bookingrequest, getBookings };
