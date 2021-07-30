// Set up express and mongoose
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;

var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
require('dotenv').config();

// connect to mongodb
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
        if (err) {
            console.log('connection error', err);
        }else{
            console.log('connected to mongodb');
        }
    }
);

// Set up EJS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

// set up multer for file downloads
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
var upload = multer({ storage: storage });

var imgModel = require('./uploadmodel.js');

// GET request handler that priovides a form to upload a file
app.get("/", (req, res) => {
    imgModel.find({}, (err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send("An error occurred", err);
      } else {
        res.render("NewItem", { items: items });                 //This needs changed to whatever Kevin names the file
      }
    });
  });

  // POST request handler that uploads a file
  app.post("/upload", upload.single("image"), (req, res) => {
 var obj = {
     name: req.body.name,
     desc: req.body.desc,
     img: {
         data: fs.readFileSync(
             path.join(__dirname, '../uploads/', req.file.filename)
         ),
         contentType:"image/png",
     },
 };
  imgModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.redirect("/");
    }
  }
);
});
