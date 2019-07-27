//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();

let currentUser = String;
let currentUserID = String;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect('mongodb://localhost:27017/customerListDB', {
  useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  googleId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost:3000/auth/google/customer"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    currentUser = profile.displayName;

    User.findOrCreate({
      username: profile.displayName,
      googleId: profile.id
    }, function(err, user) {
      return cb(err, user);
    });
  }
));



const customerSchema = new mongoose.Schema({
  // _id: String,
  userId: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  birthDay: String,
  remark: String,
  meetings: [{
    title: String,
    date: Date,
    content: String
  }]
});
const Customer = new mongoose.model("Customer", customerSchema);
//TODO



app.get("/", function(req, res) {

  res.render("login");


});
app.get("/signin", function(req, res) {
  res.render("signin");
});

app.get("/list", function(req, res) {

  if (req.isAuthenticated()) {
    Customer.find({
      userId: currentUserID
    }, function(err, customer) {
      if (err) {
        console.log(err);
      } else {
        res.render("list", {
          currentUser: currentUser,
          customer: customer
          // phoneNumber: customer.phoneNumber,
          // firstName : customer.firstName,
          // lastName : customer.lastName,
          // email :customer.email,
          // customerID : customer._id
        });

      }
    });


  } else {
    res.redirect("/");

  }
});

app.get("/newcustomer", function(req, res) {

  if (req.isAuthenticated()) {
    res.render("newcustomer", {
      currentUser: currentUser
    });
  } else {
    res.redirect("/");

  }
});
app.get("/customer", function(req, res) {

  if (req.isAuthenticated()) {
    res.render("customer", {
      currentUser: currentUser
    });
  } else {
    res.redirect("/");

  }
});

app.get("/customer/:customerIdPage", function(req, res) {

  if (req.isAuthenticated()) {
    const currentID = req.params.customerIdPage;
    Customer.findById(currentID , function(err, customer) {
      if (err) {
        console.log(err);
      } else {
        console.log(customer);
        const mettingArrey = customer.meetings;
        res.render("customer", {
          currentUser: currentUser,
          customer: customer,
          meetings : mettingArrey
          // phoneNumber: customer.phoneNumber,
          // firstName : customer.firstName,
          // lastName : customer.lastName,
          // email :customer.email,
          // customerID : customer._id
        });

      }
    });


  } else {
    res.redirect("/");

  }
});




app.get("/logout", function(req, res) {
  req.logout();
  res.redirect('/');

});

app.get("/fail", function(req, res) {

  res.redirect('/');
});

app.post("/signin", function(req, res) {
  const userName = req.body.username;
  const password = req.body.password;
  currentUser = userName;
  User.register({
    username: userName
  }, password, function(err, user) {
    if (err) {
      console.log(err);
      res.redirect("/");
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/list");
      });
    }
  });

});

app.post("/newcustomer", function(req, res) {

  const newCustomer = new Customer({
    // _id: req.body.phoneNumberInput,
    userId: currentUserID,
    firstName: req.body.firstNameInput,
    lastName: req.body.lastNameInput,
    phoneNumber: req.body.phoneNumberInput,
    email: req.body.emailInput,
    birthDay: req.body.birthDayInput,
    remark: req.body.remarksTextInput
  });
  newCustomer.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/list");
    }
  });

});

//////////////////// LOGINS ////////////////////
app.post("/login", function(req, res) {

  const userName = req.body.username;
  const password = req.body.password;
  currentUser = userName;
  const user = new User({
    username: userName,
    password: password
  });



  req.login(user, function(err) {
    if (err) {
      res.redirect("/");
    } else {
      passport.authenticate("local", {
        failureRedirect: '/fail'
      })(req, res, function() {
        currentUserID = req.user._id;
        res.redirect("/list");
      });
    }
  });

});

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', "email"]
  }));

app.get('/auth/google/customer',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    currentUserID = req.user._id;
    res.redirect('/list');
  });

/////////////////////////////////////////////
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
