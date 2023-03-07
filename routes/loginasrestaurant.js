const connectDB = require("../db/connect");
const User = require("../models/user");

const loginasrestaurant = {
  path: "/api/loginasrestaurant/:email",
  method: "patch",

  handler: async (req, res) => {
    console.log(req.params.id);
    // const { email, password } = req.body;
    const db = connectDB(process.env.MONGO_URI);
    // const { id: userID } = req.params.id;
    console.log(req.params);
    const userEmail = req.params.email;

    // console.log("l1.id");
    // console.log({ _id: userID });
    try {
      const updateprofile = await User.findOneAndUpdate(
        { email: userEmail },
        req.body,
        {
          new: true,
          runValidators: false,
          useFindAndModify: false,
        }
      );
      console.log(req.body);
      console.log(updateprofile);
      if (!updateprofile) {
        return res.status(404).send("smthn went wrong");
      }
      res.status(200).json({ updateprofile });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  },
};

module.exports = loginasrestaurant;
