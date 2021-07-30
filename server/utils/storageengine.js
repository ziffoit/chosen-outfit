// Initialize gridfs storage engine

const methodOverride = require('method-override');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

// Create multer storage engine
const storageEngine =  new GridFsStorage({
        URL: 'mongodb://localhost:27017/test',
        file: (req,file) => {
            return new Promise((resolve,reject) => {
                // encrypt file name
                crypto.randomBytes(16, (err, buf) => {
                    if(err) {
                       return reject(err);
                    }
                    const fileName = buf.toString('hex') + path.extname(file.originalname);
                    const fileInfo = {
                        fileName: fileName,
                        bucketName: 'uploads'
                    };
                    resolve(fileInfo);
                });
            });
        }
    });

    const upload = multer({ storage });
    
