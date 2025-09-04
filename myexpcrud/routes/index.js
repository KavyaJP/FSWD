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

module.exports = router;
