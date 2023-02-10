const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const authServices = {
  genrateToken: async (user) => {
    try {
      let tokens = null;
      const { id, role } = user;
      const payload = {
        id: id,
        role: role,
      };
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "60s",
      });
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "14d",
      });

      // check user alredy has refresh token saved
      let findTokenQuery = "SELECT * FROM userToken WHERE userId = ?";
      pool.query(findTokenQuery, [user.id], (err, data) => {
        if (err) return res.json(err);
        // find any refresh token conatined with given

        if (data.length > 0) {
          // remove existing token
          let delTokenQuery = "DELETE FROM userToken WHERE userId = ?";
          pool.query(delTokenQuery, [data[0].userId], (err, data1) => {
            if (err) throw err;
            console.log("Existing token removed");
          });
        }
        // Add new Token to database
        let insertTokenQuery =
          "INSERT INTO userToken (`userId`, `token`) VALUES (?)";
        let values = [user.id, refreshToken];
        pool.query(insertTokenQuery, [values], (err, data) => {
          if (err) throw err;
          console.log("new Token Added");
        });
      });
      tokens = {
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
      console.log(tokens);
      return tokens;
    } catch (err) {
      console.log(err);
    }
  },

  verifyRefreshToken: async (refreshToken) => {
    try {
      // Find refresh token exist or not
      let data = null;
      let findTokenQuery = "SELECT * FROM userToken WHERE token = ?";
      pool.query(findTokenQuery, [refreshToken], (err, data) => {
        if (err) throw err;
        console.log("found");
      });
      data = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      console.log(data);
      if (!data) {
        throw "Dteails not found";
      }
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  authMiddleWare: async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log("middle",token)
    if (token === null || !token)
      return res.status(401).json({
        message: "There is no token in header",
      });

    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!user) {
      return res.status(401).json({
        message: "Token is Expired Login Again.",
      });
    }
    req.user = user;
    console.log(user)
    next();
  },
};
module.exports = authServices;
