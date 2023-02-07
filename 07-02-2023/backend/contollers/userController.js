const User = require("../models/userModel");

const userController = {
  userRegistration: async (req, res) => {
    try {
      console.log(req.body);
      const newUser = new User(req.body);
      const response = await newUser.save();
      if (response) {
        return res.status(200).json({
          message: "User registration Sucessfull",
          data: response,
        });
      }
      return res.status(401).json({
        message: "User creation failed",
      });
    } catch (err) {
      return res.status(500).json({
        message: "Internal Server Error.",
      });
    }
  },

  userLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.find({email: email});
      if (user) {
        if (user[0].password === password) {
          return res.status(200).json({
            message: "User Login Sucessfull",
            data: user,
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

  addSubject: async (req,res) =>{
      try {
         let id = req.query.id;
         const user = await User.findById(id);
         if(user){
            user.subjects.push(req.body)
            return res.status(200).json({
                message: "Subject Added Sucessfully."
            })
         }
         return res.status(401).json({
            message: "User creation failed",
          });
      } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error.",
          });
      }
  },
  getUserDetails: async (req,res) =>{
    try {
       let id = req.query.id;
       const user = await User.findById(id);
       if(user){
          return res.status(200).json({
              message: "User data fetch Sucessfully.",
              data: user,
          })
       }
       return res.status(404).json({
          message: "User  Not Found",
        });
    } catch (err) {
      return res.status(500).json({
          message: "Internal Server Error.",
        });
    }
}

};

module.exports = userController;
