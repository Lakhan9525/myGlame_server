const express = require("express");
const addressModal = require("../model/address.module");
const addressRoute = express.Router();

addressRoute.post("/address/post", async (req, res) => {
  try {
    const data = await addressModal.insertMany([req.body]);
    res.send("data save");
  } catch (err) {
    res.send(err.message);
  }
});

addressRoute.get("/address", async (req, res) => {
  try {
    const data = await addressModal.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

addressRoute.delete("/address/delete/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const data = await addressModal.findOneAndDelete({ _id: id });
    res.send("deleted");
  } catch (err) {
    res.send(err);
  }
});

module.exports = addressRoute;
