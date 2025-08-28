const express = require("express");
const app = express();
const port = 3000;

// Middleware - this is a function that will be called automatically
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/contactprocess", (req, res) => {
  var no1 = req.query.txt1;
  var no2 = req.query.txt2;
  var ans = parseInt(no1) + parseInt(no2);
  res.send(`Sum is ${ans}`);
});

// Parameter handling
// http://127.0.0.1:3000/product/id
app.get("/product/:id", (req, res) => {
  var a = req.params.id;
  res.send(`Product details is ${a}`);
});

// Query string
// http://127.0.0.1:3000/search?q=string
app.get("/search", (req, res) => {
  var a = req.query.q;
  res.send(`Product details is ${a}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("The app started on http://localhost:3000");
