const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const { findUser } = require("../services/userServices");
const {
  genrateToken,
  verifyRefreshToken,
} = require("../services/authServices");

let posts = [
    {
        id: 1,
        userId: 1,
        text: "Post 1",
        role:"admin"
    },
    {
        id: 2,
        userId: 1,
        text: "Post 2",
        role:"admin"
    },
    {
        id: 3,
        userId: 2,
        text: "Post 3",
        role:"user"
    },
    {
        id: 4,
        userId: 1,
        text: "Post 4",
        role:"super-admin"
    },
];
const userController = {
  userRegister: async (req, res) => {
    try {
      // find user already exists  or not
      let user = await findUser({
        email: req.body.email,
      });
      if (user) {
        return res.status(403).json({
          message: "User Already Exists.",
        });
      }
      // Not exist then create a recoerd in to user
      const { name, email, password, role } = req.body;

      let insetUserQuery =
        "INSERT INTO users (`name`, `email`, `password`, `role`) VALUES (?)";

      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      let t_role = !role ? "user" : role;
      let values = [name, email, hashPassword, t_role];

      pool.query(insetUserQuery, [values], (err, data) => {
        if (err) res.json(err);
        console.log("created");
        return res.status(200).json({
          message: "User Created Successfully",
          data: data,
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server Error",
        data: err,
      });
    }
  },
  userLogin: async (req, res) => {
    try {
      //Find User
      let findUserQuery = "SELECT * FROM users WHERE email = ?";
      pool.query(findUserQuery, [req.body.email], (err, data) => {
        if (err) {
          res.json(err);
        }
        // User found
        if (data.length <= 0) {
          return res.status(409).json({ message: "User does not Exists" });
        }

        const checkPassword = bcrypt.compareSync(
          req.body.password,
          data[0].password
        );

        if (!checkPassword) {
          return res.status(400).json({
            message: "Worng Username and Password",
          });
        }

        // genrate tokens
        const user = {
          id: data[0].id,
          role: data[0].role,
        };
        genrateToken(user).then((data) => {
          return res.status(200).json({
            tokens: data,
            message: "User Login Sucessfull",
          });
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server Error",
        data: err,
      });
    }
  },
  getNewAcessToken: async (req, res) => {
    try {
      verifyRefreshToken(req.body.refreshToken).then((data) => {
        return res.status(200).json({
          message: "Token Refreshed",
          data: data,
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server Error",
        data: err,
      });
    }
  },
  userLogout: async (req, res) => {
    try {
      // Find Token And Remove It from Data
      let delTokenQuery = "DELETE FROM userToken WHERE token = ?";
      pool.query(delTokenQuery, [req.body.refreshToken], (err, data) => {
        if (err) throw err;
        return res.status(200).json({
          message: "User Logout Sucessfully",
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server Error",
        data: err,
      });
    }
  },
  addPost: async(req, res) =>{
     try {
        let filtedPost = posts.filter(item => item.role === req.user.role);
        if(filtedPost)
        return res.status(200).json(filtedPost);
     } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            data: err,
          });
     }
  }
};

module.exports = userController;
