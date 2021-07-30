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
            // Check for existing file
            Image.findOne({ caption: req.body.caption })
                .then(image => {
                    console.log(image);
                    if (image) {
                       return res.status(200).json({
                            message: 'Image already exists'
                        });
                    }
                    // Create new image
                    let newImage = new Image({
                        caption: req.body.caption,
                        filename: req.file.filename,
                        uploadDate: new Date()
                    });
                    // Save image to gridfs
                    newImage.save()
                    .then((image) => {
                        res.status(200).json({
                            success: true,
                            image,

                        });
                    })
                    .catch(err => res.status(500).json(err));
                })
                .catch(err => res.status(500).json(err));
        });

        // Fetches image from gridfs
        imageRouter.route('/files')
            .get((req, res, next) => {
                gfs.find().toArray((err, files) => {
                    if(!files || files.length === 0) {
                        res.status(200).json({
                            message: 'No files found'
                        });
                    }

                    // Image formats supported by GridFS
                    files.map(file => {
                        if(file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'image/svg+xml') {
                           file.isImage = true;
                        }
                        else {
                            file.isImage = false;
                        }
                    });
                    res.status(200).json({
                        success: true,
                        files,
                    });
                });
            });

// Fetch a single image from gridfs
imageRouter.route('/files/:filename')
    .get((req, res, next) => {
        gfs.find({ filename: req.params.filename }).toArray((err, files) => {
            if(!files || files.length === 0) {
                res.status(200).json({
                    success: false,
                    message: 'No files found'
                });
            }
            res.status(200).json({
                success: true,
                files,
            });
        }
        );
    });

    // Fetches a file and renders into the broswer
    imageRouter.route('/image/:filename')
        .get((req, res, next) => {
            gfs.find({ filename: req.params.filename }).toArray((err, files) => {
                if(!files || files.length === 0) {
                    res.status(200).json({
                        success: false,
                        message: 'No files found'
                    });
                }
               if(files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png' || files[0].contentType === 'image/svg+xml') {
                //    render image
                gfs.openDownloadStreamByName(req.params.filename).pipe(res);
                }
                else {
                    res.status(200).json({
                        success: false,
                        message: 'File not an image'
                    });
                }
            });
                });


// Delete image from gridfs
            imageRouter.route('/file/del/:id')
                .post((req, res, next) => {
                    console.log(req.params.id);
                    gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
                        if(err){
                            return res.status(404).json({ err: err });
                        }
                        res.status(200).json({
                            success: true,
                            message: `File with ID ${req.params.id} is deleted`
                        });
                    }

      
