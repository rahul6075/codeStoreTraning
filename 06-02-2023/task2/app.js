const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const Post = require("./models/post");
const app = express();
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
mongoose.connect("mongodb://0.0.0.0:27017/crudDatabase", (err, db) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Mongodb Commected");
});

// Routes for creating apis
app.post("/api/addpost", (req, res) => {
  try {
    const { userId, desc, title } = req.body;
    if (userId && desc) {
      let newpost = new Post({
        userId: userId,
        title: title,
        desc: desc,
      });
      let x = newpost.save();
      x.then((res) => {
        return res;
      }).then((data) => {
        console.log(data);
      });
      return res.status(200).json({
        msg: "Post Created Succesfully",
      });
    } else {
      return res.status(400).json({
        msg: "Please provide the input.",
      });
    }
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

app.get("/api/posts", async (req, res) => {
    try {
        let getAllpost = await Post.find();
        if(getAllpost){
            return res.status(200).json({
                msg: "Post fetch Sucessfully",
                data: getAllpost
            })
        }
        return res.status(401).json({
            msg: "Some Error happenend",
            data: []
        })
        
    } catch (err) {
        return res.status(500).json({ msg: err });
    }
})

app.put("/api/post/:id", async (req, res) =>{
    try {
        let id = req.params.id;
        console.log(id, req.body)
        let updatePost = await Post.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if(updatePost){
            return res.status(200).json({
                msg: "Post Updated Sucessfully",
                data: updatePost
            });
        }
        return res.status(404).json({
            msg: "Document not found",
        })

    } catch (err) {
        return res.status(500).json({ msg: err });
    }
})

app.delete("/api/deletepost/:id", async (req, res) =>{
    try {
        let id = req.params.id;
        let post = await Post.findByIdAndDelete(id);
        if(post){
            return res.status(200).json({
                msg: "Post Removed Successfully",
                data: post
            })
        }
        return res.status(404).json({
            msg: "Document not found",
        })

    } catch (err) {
        return res.status(500).json({ msg: err });
    }
})


app.get("/test", (req, res) => {
  return res.json({
    msg: "Api is running.",
  });
});

app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));
