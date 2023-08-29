const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Categories', categoriesSchema);
module.exports.Categories = mongoose.model('Categories');
