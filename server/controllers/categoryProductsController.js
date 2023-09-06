const asyncHandler = require('express-async-handler');
const { findMaxMinPrice, sortByPrice, generateQueryParams } = require('../utils');
const Products = require('../models/categoryProductsModel');

const getCategoryProducts = async (req, res) => {
    const { categoryType } = req.params || {};
    const {
        page = 0,
        pageSize = 10,
        type,
        priceRangeLimit,
        priceFilter,
    } = req.query || {};

    const query = generateQueryParams({
        categoryType,
        type,
        priceRangeLimit,
        priceFilter,
    });

    const categoryProducts = await Products.find(query)
        .skip(page * pageSize)
        .limit(pageSize)
        .sort({ price: sortByPrice(priceFilter) });

    const totalCount = await Products.countDocuments({ categoryType: `${categoryType}` });

    const productTypeOptions = await Products.distinct('type', {
        categoryType: `${categoryType}`,
    });

    const { maxPrice, minPrice } = await findMaxMinPrice(Products, categoryType);

    res.status(200).json({
        categoryProducts,
        totalCount,
        productTypeOptions,
        maxPrice,
        minPrice,
    });
};

module.exports = {
    getCategoryProducts,
};
