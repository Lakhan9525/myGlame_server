const express = require("express");
const bagModel = require("../model/bag.module");
const bagRoute = express.Router();

bagRoute.post("/bag/post", async (req, res) => {
  try {
    let data = await bagModel.insertMany([{ ...req.body, total: 1 }]);
    res.send("added to bag");
  } catch (err) {
    console.log("err");
  }
});

bagRoute.get("/bag", async (req, res) => {
  try {
    let data = await bagModel.find();
    res.send(data);
  } catch (err) {
    console.log("err");
  }
});

bagRoute.delete("/bag/delete/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    let data = await bagModel.findOneAndDelete({ _id: _id });
    res.send("deleted");
  } catch (err) {
    console.log("err");
  }
});

bagRoute.patch("/bag/update/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
    let data = await bagModel.findOneAndUpdate({ _id: _id }, req.body, {
      new: true,
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = bagRoute;
