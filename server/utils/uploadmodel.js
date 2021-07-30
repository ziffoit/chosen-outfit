var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    img:
    {
        data: Buffer,
        contentType: String
    }
});

// export the model
module.exports = mongoose.model('Image', imageSchema);
