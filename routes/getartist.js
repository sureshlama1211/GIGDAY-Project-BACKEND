const express = require("express");
const connectDB = require("../db/connect");

const user = require("../models/user");

const getartist = {
  path: "/api/user",
  method: "get",
  handler: async (req, res) => {
    const db = connectDB(process.env.MONGO_URI);
    try {
      const checkfname = await user.find({
        role: "artist",
        isformfilled: true,
      });
      if (!checkfname) {
        res.status(400).json({ message: "firstname is not found" });
      }
      res.status(200).json({ checkfname });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
};

const getsingleartist = {
  path: "/api/singleuser/:email",
  method: "get",
  handler: async (req, res) => {
    const db = connectDB(process.env.MONGO_URI);
    const userEmail = req.params.email;

    const artist = await user.findOne({ email: userEmail });
    if (!artist) {
      return res.sendStatus(400);
    }
    res.status(200).json({ artist });
  },
};
module.exports = { getartist, getsingleartist };
