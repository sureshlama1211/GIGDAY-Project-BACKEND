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
module.exports = getartist;
