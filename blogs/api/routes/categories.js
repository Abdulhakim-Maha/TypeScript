const express = require("express");
const router = express.Router();
const Category = require("../models/Categories");

//new categories
router.post("/", async (req, res) => {
  const newCate = new Category(req.body);
  try {
    const saveCate = await newCate.save();
    res.status(201).json(saveCate);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const cates = await Category.find();
    res.status(201).json(cates);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
