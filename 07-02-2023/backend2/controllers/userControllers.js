const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const userController = {
  userRegistration: async (req, res) => {
    try {
      // check user is alredy exists or not
      let q = "SELECT * from user WHERE email = ?";
      pool.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length) {
          return res.status(409).json({ message: "User alredy Exists" });
        }
        // encrpyt password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        // Insert User Query
        let insertQuery =
          "INSERT INTO user (`first_name`, `last_name`, `email`,`password`, `contact`, `address`) VALUES (?)";

        let values = [
          req.body.first_name,
          req.body.last_name,
          req.body.email,
          hash,
          req.body.contact,
          req.body.address,
        ];
        console.log("xvxvx", values);
        pool.query(insertQuery, [values], (err, data) => {
          if (err) return res.json(err);
          let q = "SELECT * from user WHERE email = ?";
          pool.query(q, [req.body.email], (err, data) => {
            if (err) return res.json(err);
            const resObj = {
              id: data[0].id,
              first_name: data[0].first_name,
              last_name: data[0].last_name,
              contact: data[0].contact,
              email: data[0].email,
              address: data[0].address,
              image: data[0].image,
            };
            return res
              .status(200)
              .json({ message: "User Created Sucrssfully", data: resObj });
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
  userLogin: async (req, res) => {
    try {
      // fild user is alredy exists or not
      let q = "SELECT * from user WHERE email = ?";
      pool.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);
        console.log(data);
        if (data.length <= 0) {
          return res.status(409).json({ message: "User does not Exists" });
        }

        // decrpyt password
        const checkPassword = bcrypt.compareSync(
          req.body.password,
          data[0].password
        );

        if (!checkPassword) {
          return res.status(400).json({
            message: "Worng Username and Password",
          });
        }
        const resObj = {
          id: data[0].id,
          first_name: data[0].first_name,
          last_name: data[0].last_name,
          contact: data[0].contact,
          email: data[0].email,
          address: data[0].address,
        };
        return res.status(200).json({
          message: "User Login Sucessfull",
          data: resObj,
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server Error",
        data: err,
      });
    }
  },
  addSubject: async (req, res) => {
    try {
      let insertQuery =
        "INSERT INTO subjects (`name`, `marksObitained`, `max`,`userId`) VALUES ?";
      let items = req.body;
      let values = items.map((item) => [
        item.name,
        item.marksObitained,
        item.max,
        item.userId,
      ]);
      console.log(values);
      pool.query(insertQuery, [values], (err, data) => {
        if (err) res.json(err);

        return res.status(200).json({
          message: "Subject Added Sucessfully",
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server Error",
        data: err,
      });
    }
  },
  geSubjectDetails: async (req, res) => {
    try {
      // Find details with given userId
      let findQuery = "SELECT * FROM subjects WHERE userId = ?";
      pool.query(findQuery, [req.params.id], (err, data1) => {
        if (err) res.json(err);

        let q = "SELECT * FROM user WHERE id = ?";
        pool.query(q, [req.params.id], (err, data) => {
          if (err) if (err) res.json(err);

          let resObj = {
            data: data1,
            image: data[0].image,
          };
          return res.status(200).json({
            message: "Subject Rocord Found",
            data: resObj,
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
};
module.exports = userController;
