const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const api_data = require("./apiSchema");
const testing_obj = require("./testOb");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/practice");

app.post("/newdata", async (req, res) => {
  let data = req.body;
  let myData = JSON.stringify(data);
  console.log(myData);
  fs.writeFile("data.json", myData, () => {
    console.log("saved!!!!!!!!!");
  });

  var abc = JSON.stringify(data);
  var myOjs = data;
  // let api_dataEn = new api_data(myData);
  let result = api_data.insertMany(myOjs, (err, res) => {
    console.log("obj seved!!!!!");
  });
  console.log(result);

  res.send(result);
  console.log(myData);
});

var a = [
  {
    id: 1,
    name: "pip",
    email: "pip@test.com",
  },
  {
    id: 2,
    name: "pip2",
    email: "pip2@test.com",
  },
];

let result3 = testing_obj.insertMany(a, (err, res) => {
  console.log("private Obj save!!!!");
});

app.listen(5000, () => {
  console.log("Server is running......");
});
