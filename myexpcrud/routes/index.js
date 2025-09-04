var express = require("express");
var router = express.Router();

var ProductModel = require("../models/produt.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/home", function (req, res, next) {
  res.render("home");
});
router.get("/about", function (req, res, next) {
  res.render("about");
});
router.get("/add-product", function (req, res, next) {
  res.render("add-product");
});
router.post("/add-product-process", function (req, res, next) {
  var ProductData = {
    pname: req.body.txt1,
    pprice: req.body.txt2,
    pdetails: req.body.txt3,
  };

  var myData = ProductModel(ProductData);

  myData
    .save()
    .then(() => {
      res.send("Record Added Succesfully");
    })
    .catch((err) => {
      console.log(`Error Occured ${err}`);
    });
});

router.get("/display-product", async function (req, res, next) {
  try {
    const data = await ProductModel.find();
    res.render("display-product", { mydata: data });
  } catch (err) {
    console.log(`Error Occured ${err}`);
    next(err);
  }
});

router.get("/display-product-api", async function (req, res, next) {
  try {
    const mydata = await ProductModel.find();
    res.json(mydata);
  } catch (err) {
    console.log(`Error Occured ${err}`);
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

module.exports = router;
