const mongoose = require('mongoose');

const categoryProductsSchema = mongoose.Schema(
    {
        categoryType: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Products', categoryProductsSchema);
module.exports.Products = mongoose.model('Products');
