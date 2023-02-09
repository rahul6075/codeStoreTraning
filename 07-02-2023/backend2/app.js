const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const upload = require("./config/storage");
const app = express();
// Middle wares
app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const PORT = 3000;
//Connect Local Database
pool.getConnection(function (err, conn) {
  // Do something with the connection
  if (err) throw err;
  console.log("Database Connected");
});

// Upload Route
app.post("/upload/:id", upload.single("testImg"), async (req, res) => {
  console.log("uploaded")
  const file = req.file;
    let q = "UPDATE user SET image=? WHERE id = ?";
    pool.query(q, [file.filename, Number(req.params.id)], (err, data) => {
      if (err) return res.json(err);
      console.log("file uploaded")
      return res.status(200).json({
        message: "File uploaded.",
        image: file.filename,
      });
    });
});
// Routes
app.use("/api/user", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("Api is running.");
});

app.listen(PORT, () => console.log(`Server is runnning  on ${PORT}.`));
