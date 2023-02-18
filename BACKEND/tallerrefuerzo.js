const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 1000;
let db;

app.use(express.json());
app.use(cors());

app.get("/api/1", async (req,res) =>{
    try{
        console.log(req.query);
        const result = await db
        .collection("movies")
        .find(req.body)
        .limit(50)
        .toArray();

        res.status(200).json({
            ok: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error.message
        })
    }
});

app.get("/api/2", async (req,res) =>{
    try{
        console.log(req.query);
        const result = await db
        .collection("movies")
        .find(genres.drama)
        .limit(50)
        .toArray();

        res.status(200).json({
            ok: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error.message
        })
    }
});

app.get("/api/3", async (req,res) =>{
    try{
        console.log(req.query);
        const result = await db
        .collection("movies")
        .find(genres.action)
        .limit(50)
        .toArray();

        res.status(200).json({
            ok: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error.message
        })
    }
});

app.get("/api/3", async (req,res) =>{
    try{
        console.log(req.query);
        const result = await db
        .collection("movies")
        .find({country:USA})
        .limit(50)
        .toArray();

        res.status(200).json({
            ok: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error.message
        })
    }
});








mongoose
.connect(
    "mongodb+srv://ABC1234:ABC1234@cluster0.qvyzed2.mongodb.net/sample_mflix?retryWrites=true&w=majority"
)

.then(() => {
    console.log("Mongo DB Connected!");
    db = mongoose.connection.db;
  })
  .catch(() => {
    console.log("Connection Failed!");
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});