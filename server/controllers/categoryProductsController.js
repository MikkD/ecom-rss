const asyncHandler = require('express-async-handler');
const categoryProductsModel = require('../models/categoryProductsModel');

const getCategoryProducts = asyncHandler(async (req, res) => {
    const categoryProducts = await categoryProductsModel.find();
    console.log('🚀 ~getCategoryProducts ~ categoryProducts:', categoryProducts);

    setTimeout(() => res.json({ message: 'YO PRODUCTS' }), 1000);
});

module.exports = {
    getCategoryProducts,
};
