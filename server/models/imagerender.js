// initialize gridfs stream

const url = 'mongodb://localhost:27017/imagerender';
const connect = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

let gfs;
connect.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(connect.db, {
        bucketName: 'uploads'
    });
});


// Upload middleware initialized with gridfs
// Stores file in gridfs

    imageRouter.route('/')
        .post(upload.single('file'), (req, res, next) => {
            console.log(req.body);
            Image.findOne({ caption: req.body.caption })
                .then(image => {
                    if (image) {
                        res.status(409).send({
                            message: 'Image with caption already exists'
                        });
                    } else {
                        const stream = gfs.openUploadStream(req.body.caption);
                        req.pipe(stream);
                        stream.on('finish', () => {
                            Image.create({
                                caption: req.body.caption,
                                filename: req.body.caption + '.' + req.file.mimetype.split('/')[1],
                                uploadDate: new Date()
                            }).then(image => {
                                res.json(image);
                            });
                        });
                    }
                }
            );
        });
        