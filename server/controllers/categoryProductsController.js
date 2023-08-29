const asyncHandler = require('express-async-handler');

const Products = require('../models/categoryProductsModel');

const getCategoryProducts = async (req, res) => {
    const categoryType = req.params.categoryType;

    const categoryProducts = await Products.find({ categoryType: `${categoryType}` });

    res.status(200).json({ categoryProducts });
};

module.exports = {
    getCategoryProducts,
};
