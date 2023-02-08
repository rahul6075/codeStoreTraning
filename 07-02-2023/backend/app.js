const express = require("express");
const mongoose = require("mongoose");
const upload = require("./config/storage");
const ImgModel = require("./models/imageModel");
const cors = require("cors");

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
mongoose.set("strictQuery", false);
// Database Connection
mongoose.connect("mongodb://0.0.0.0:27017/studentCruddb", (err, db) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Mongodb Commected");
});

// upload images
app.post("/upload", upload.single("testImg"), async (req, res, next) => {
  try {
    console.log(req.file, req.body)
    const newImage = new ImgModel({
      userId: req.body.userId,
      name: req.file.originalname,
      image: {
        data: req.file.filename,
        contentType: req.file.mimetype,
      },
    });
    const createImg = await newImage.save();
    if(createImg){
       return res.status(200).json({
          message: "Image Uploaded Successfully",
          data: createImg
       })
    }
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
      data: err,
    });
  }
});

app.get("/getimg/:id", async (req, res) => {
  try {
    let doc = await ImgModel.findOne({ userId: req.params.id });
    if (doc) {
      return res.status(200).json({
        message: "Image found",
        data: doc,
      });
    }
    return res.status(404).json({
      message: "Not found",
      data: doc,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server Error",
      data: err,
    });
  }
});

// Routes
app.use("/api/user", require("./routes/userRoute"));
app.get("/", (req, res) => {
  res.send("Api is running.");
});

app.listen(PORT, () => console.log(`Server is runnning  on ${PORT}.`));
