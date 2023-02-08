const User = require("../models/userModel");
const Img = require("../models/imageModel")
const userController = {
  userRegistration: async (req, res) => {
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (!user) {
        const newUser = new User(req.body);
        const response = await newUser.save();
        if (response) {
          return res.status(200).json({
            status: 200,
            message: "User registration Sucessfull",
            data: {
              id: response._id,
              first_name: response.first_name,
              last_name: response.last_name,
              email: response.email,
              contact: response.contact,
            },
          });
        }
      } else {
        return res.status(400).json({
          status: 401,
          message: "User Aleady Exits",
        });
      }
    } catch (err) {
      return res.status(500).json({
        status: 501,
        message: "Internal Server Error.",
      });
    }
  },

  userLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.find({ email: email });
      if (user) {
        if (user[0].password === password) {
          return res.status(200).json({
            message: "User Login Sucessfull",
            data: {
              id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              contact: user.contact,
            },
          });
        } else {
          return res.status(401).json({
            message: "Icorrect Password",
            data: {},
          });
        }
      } else {
        return res.status(404).json({
          message: "User not found",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error.",
      });
    }
  },

  addSubject: async (req, res) => {
    try {
      let id = req.params.id;
      const user = await User.findById(id);
      if (user) {
        let arr = req.body;
        console.log("arrr", arr);
        arr.map((item) => {
          console.log("Tems", item);
          user.subjects.unshift(item);
        });
        await user.save();
        return res.status(200).json({
          message: "Subject Added Sucessfully.",
        });
      } else {
        return res.status(404).json({
          message: "User not found",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error.",
      });
    }
  },
  getUserDetails: async (req, res) => {
    try {
      let id = req.params.id;
      const user = await User.findById(id);
      if (user) {
        let image = await Img.findOne({userId: id});
        if(image){
          return res.status(200).json({
            message: "User data fetch Sucessfully.",
            data: {
              id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              image: image.image,
              email: user.email,
              contact: user.contact,
              subjects: user.subjects,
            },
          });
        }
        
      } else {
        return res.status(404).json({
          message: "User  Not Found",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error.",
      });
    }
  },
};

module.exports = userController;
