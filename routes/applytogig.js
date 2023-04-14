const connectDB = require("../db/connect");
const AppliedGig = require("../models/ApplyGig");

const applyrequest = {
  path: "/api/applygig",
  method: "post",
  handler: async (req, res) => {
    const db = connectDB(process.env.MONGO_URI);
    const applygig = await AppliedGig.create({
      appliedGig: req.body.appliedGig,
      appliedBy: req.body.appliedBy,
      createdBy: req.body.createdBy,
      status: req.body.status,
    });
    if (!applygig) {
      return res.status(400).json({ error: "something went wrong" });
    }
    res.status(201).json({ applygig });
  },
};

//for getting the notification by restaurnat

const getAppliedGig = {
  path: "/api/mygig/:userid",
  method: "get",
  handler: async (req, res) => {
    const db = connectDB(process.env.MONGO_URI);

    if (req.query.role === "restaurant") {
      applygig = await AppliedGig.find({
        createdBy: req.params.userid,
      })
        .populate("appliedBy")
        .populate("appliedGig");
    }
    if (!applygig) {
      res.status(500).json({ error: "something went wrong" });
    }
    res.send(applygig);
  },
};
//for updating the apply after the artist accepts the request
const applygigstatus = {
  path: "/api/gigapply/:id",
  method: "put",

  handler: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    console.log(" k cha hajur", req.body);
    try {
      const applygignow = await AppliedGig.findById(id);
      if (!applygignow) {
        return res.status(404).json({ message: "Booking not found" });
      }
      applygignow.status = status;
      console.log(applygignow, "hawa yr");

      await applygignow.save();
      res.json(applygignow);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

module.exports = { applyrequest, getAppliedGig, applygigstatus };
