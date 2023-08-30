const mongoose = require('mongoose');

const singleProductsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    skuId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    vendor: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    gallery: {
        type: Array,
        required: true,
    },
});

module.exports = mongoose.model('singleproducts', singleProductsSchema);
module.exports.Singleproducts = mongoose.model('singleproducts');
