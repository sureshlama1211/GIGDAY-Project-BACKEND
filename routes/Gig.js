require("dotenv").config();
const connectDB = require("../db/Connect");
const jwt = require("jsonwebtoken");
const Creategig = require("../models/Creategig");

const getAllgig = {
  path: "/api/allgigs",
  method: "get",
  handler: async (req, res) => {
    const db = connectDB(process.env.MONGO_URI);
    const gig = await Creategig.find({});

    res.status(200).json({ gig });
  },
};

// const getgig = {
//   path: "/api/gigs/:id",
//   method: "get",
//   handler: async (req, res) => {
//     const db = connectDB(process.env.MONGO_URI);
//     const { id: gigID } = req.params;
//     const gig = await Creategig.findOne({ _id: gigID });
//     if (!gig) {
//       return res.sendStatus(400);
//     }
//     res.status(200).json({ gig });
//   },
// };

const addgig = {
  path: "/api/gigs",
  method: "post",
  handler: async (req, res) => {
    const db = connectDB(process.env.MONGO_URI);
    // const { name, artist, category, description, quantity, dimentions } =
    //     req.body;
    const gig = await Creategig.create(req.body);
    res.status(201).json({ gig });
  },
};

// const updategig = {
//   path: "/api/gigs/:id",
//   method: "patch",
//   handler: async (req, res) => {
//     const db = connectDB(process.env.MONGO_URI);
//     const { id: gigID } = req.params;
//     console.log(req.body);
//     const gig = await Creategig.findOneAndUpdate(
//       { _id: gigID },
//       req.body,

//       {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//       }
//     );
//     console.log(req.body);
//     if (!gig) {
//       return res.status(404);
//     }

//     res.status(200).json({ gig });
//   },
// };

// const deletegig = {
//   path: "/api/gigs/:id",
//   method: "delete",
//   handler: async (req, res) => {
//     const db = connectDB(process.env.MONGO_URI);
//     const { id: gigID } = req.params;
//     const gig = await Creategig.findOneAndDelete({ _id: gigID });
//     if (!gig) {
//       return res.sendStatus(400);
//     }
//     res.status(200).json({ gig });
//   },
// };

module.exports = {
  // updategig,
  getAllgig,
  // getgig,
  // deletegig,
  addgig,
};
