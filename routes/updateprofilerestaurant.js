const connectDB = require("../db/connect");
const User = require("../models/user");
//importing multer for profile picture
const multer = require("multer");

//for the path of the file
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});
//filefilter
const isImage = (req, file, callback) => {
  //condition for only file
  if (file.mimetype.startwith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only image is allowed"));
  }
};
const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

const loginasrestaurant = {
  path: "/api/loginasrestaurant/:email",
  method: "patch",
  upload: upload.single("profile"),

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
