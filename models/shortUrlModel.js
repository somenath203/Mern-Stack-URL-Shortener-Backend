const mongoose = require('mongoose');
const shorId = require('shortid');


const shortUrlSchema = new mongoose.Schema({
    fullUrl: String,
    shortUrlId: {
        type: String,
        default: shorId.generate
    }
}, {
    timestamps: true 
});


module.exports = mongoose.model('shorturl', shortUrlSchema);

