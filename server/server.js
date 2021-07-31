const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// Storage engine things -------------------
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

  // End of storage engine things ---------------------------
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://ziffoit:<sted_bilk3dond0BEF>@cluster0.qpasb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

server.applyMiddleware({ app });
// Express static files
app.use(express.static('/uploads',express.static('uploads')));
// Changed extended to true to allow for file uploads
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});


// Set up multer storage engine
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
  }
  )
  var upload = multer({ storage: storage })
// Image post handler 
app.post('/uploadphoto', upload.single('picture'), (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString('base64');
  // Define a json object for the image attributes for saving to the database
   var finalImg = {
     contentType: req.file.mimetype,
     image: new Buffer(encode_image, 'base64'),
   };
   db.collection('mycollection').insertOne(finalImg, (err, result) => {
     console.log(result);
     if(err) return console.log(err);
     res.redirect('/');
   });
});

// Retrieve a stored image
app.get('/photos', (req, res) => {
db.collection('mycollection').find().toArray((err, result) => {
  const imgArray = result.map(element => element._id);
  console.log(imgArray);

  if(err) return console.log(err);
  res.send(imgArray);
});
});

app.get('/photo/:id', (req, res) => {
var filename = req.params.id;
db.collection('mycollection').findOne({_id: ObjectId(filename)}, (err, result) => {
  if(err) return console.log(err);
  res.contentType('image/jpeg');
  res.send(result.image.buffer)
});
});