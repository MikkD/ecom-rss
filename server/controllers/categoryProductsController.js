const asyncHandler = require('express-async-handler');

const Products = require('../models/categoryProductsModel');

const getCategoryProducts = async (req, res) => {
    const { categoryType } = req.params || {};
    const { page = 0, pageSize = 10 } = req.query || {};

    const categoryProducts = await Products.find({
        categoryType: `${categoryType}`,
    })
        .skip(page * pageSize)
        .limit(pageSize);

    const totalCount = await Products.countDocuments({ categoryType: `${categoryType}` });

    res.status(200).json({ categoryProducts, totalCount });
};

module.exports = {
    getCategoryProducts,
};
