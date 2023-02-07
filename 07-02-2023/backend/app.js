const express = require("express");
const mongoose = require("mongoose");
const upload = require('./config/storage');
const ImgModel = require('./models/imageModel');
const cors=require("cors");

const app = express();
// Middle wares
app.use(express.json());
const corsOptions ={
    origin:'*', 
    credentials:true,          
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions))
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


const singleUpload = upload.single('testImg');
// upload images
app.post('/upload', (req, res) =>{
      singleUpload(req, res, (err) =>{
          if(err){
              console.log(err);
          }else{
              const newImage = new ImgModel({
                  name: req.file.originalname,
                   image:{
                       data: req.file.filename,
                       contentType: 'image/jpg',
                   }
              })
              newImage.save().then(data => res.json(data));
          }
      }); 
})

// Routes 
app.use('/api/user', require('./routes/userRoute'));


app.get("/", (req, res) => {
     res.send("Api is running.")
})




app.listen(PORT, () => console.log(`Server is runnning  on ${PORT}.`))