const connectDB = require("../db/connect");
const User = require("../models/user");

//get the previous form value
const beforeedit = {
  path: "/api/profilebeforeedit/:email",
  method: "get",
  handler: async (req, res) => {
    const db = connectDB(process.env.MONGO_URI);
    //for getting info of a particular user
    const userEmail = req.params.email;
    console.log(userEmail);

    try {
      const getprofileinfo = await User.findOne({
        email: userEmail,
      });
      if (!getprofileinfo) {
        return res.status(400).json({ Message: "getProfile is not found" });
      }
      res.status(200).json({ getprofileinfo });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
};

const editprofile = {
  path: "/api/editprofile/:email",
  method: "patch",

  handler: async (req, res) => {
    // const { email, password } = req.body;
    const db = connectDB(process.env.MONGO_URI);
    // const { id: userID } = req.params.id;

    const userEmail = req.params.email;

    // console.log("l1.id");
    // console.log({ _id: userID });
    try {
      const editprofile = await User.findOneAndUpdate(
        { email: userEmail },
        req.body,

        {
          new: true,
          runValidators: false,
          useFindAndModify: false,
        }
      );
      console.log(req.body);
      console.log(editprofile);
      if (!editprofile) {
        return res.status(404).send("smthn went wrong");
      }
      res.status(200).json({ editprofile });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  },
};

module.exports = { beforeedit, editprofile };
