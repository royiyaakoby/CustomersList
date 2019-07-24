//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


mongoose.connect('mongodb://localhost:27017/customerListDB', {
  useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
});
const User = new mongoose.model("User", userSchema);

const customerSchema = new mongoose.Schema({
_id: String,
user: String,
firstName: String,
lastName: String,
phoneNumber: String,
email: String,
remark: String,
Meetings: [{
  title: String,
  date: Date,
  content: String
}]
});
const Customer = new mongoose.model("Customer", customerSchema);
//TODO



app.get("/", function(req,res){
  res.render("login");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
