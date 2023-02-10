const pool = require("../config/db");
const userServices = {
  findUser: async ({ email }) => {
    let resObj = false;
    let findUserQuery = "SELECT * FROM users WHERE email = ?";
    pool.query(findUserQuery, [email], (err, data) => {
      if (err) {
        resObj = false;
        throw err;
      }
      if (data.length > 0) {
        resObj = true;
      }
    });
    return resObj;
  },
 
};

module.exports = userServices;
