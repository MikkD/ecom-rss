const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
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

module.exports = mongoose.model('Slider', sliderSchema);
module.exports.Slider = mongoose.model('Slider');
